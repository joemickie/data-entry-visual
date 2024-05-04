"use strict";
// const { QueryInterface } = require("sequelize");
const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const csv = require("csv-parser");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("Orders", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      order_number: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("Customers", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("ProductCategories", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    const categoriesFromFile = [];
    const ordersFromFile = [];
    const customersFromFile = [];
    let orderNumber = 1;
    fs.createReadStream('./src/database/MOCK_DATA.csv')
      .pipe(csv())
      .on('data', (row) => {
        const categoryName = row.product_category.trim();
        if (!categoriesFromFile.find(cat => cat.name === categoryName)) {
          const categoryId = uuidv4();
          categoriesFromFile.push({
            id: categoryId,
            name: categoryName,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }

        const customerName = row.customer_name.trim();
        if (!customersFromFile.find(cus => cus.name === customerName)) {
          const customerId = uuidv4();
          customersFromFile.push({
            id: customerId,
            name: customerName,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }

        const productId = uuidv4();
        const orderId = uuidv4();
        ordersFromFile.push({
          id: orderId,
          order_number: orderNumber++,
          customerId: customersFromFile.find(cus => cus.name === customerName).id,
          productId: productId,
          customer_name: customerName,
          product_name: row.product_name.trim(),
          product_category: categoryName,
          price: parseFloat(row.price.trim()),
          order_date: new Date(row.order_date.trim()),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      })
      .on('end', async () => {
        await queryInterface.bulkInsert('ProductCategories', categoriesFromFile);
        await queryInterface.bulkInsert('Customers', customersFromFile);
        await queryInterface.bulkInsert('Orders', ordersFromFile);
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Orders");
    await queryInterface.dropTable("Customers");
    await queryInterface.dropTable("ProductCategories");
  },
};
