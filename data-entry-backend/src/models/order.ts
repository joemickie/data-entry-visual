import { Model, DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

interface OrderAttributes {
  id: string;
  order_number: number;
  customer_name: string;
  product_name: string;
  product_category: string;
  price: number;
  order_date: Date;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: string;
  public order_number!: number;
  public customer_name!: string;
  public product_name!: string;
  public product_category!: string;
  public price!: number;
  public order_date!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
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
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        order_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        timestamps: true,
      }
    );
  }
}

export default Order;
