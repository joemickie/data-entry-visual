import { Request, Response } from "express";
import ProductCategory from "../models/productCategory";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await ProductCategory.findAll({
      attributes: ['name'],
      group: ['name'],
    });

    if (categories.length === 0) {
      return res.status(404).json({
        message: `No Category found`,
      });
    }
    
    const categoryNames = categories.map((category: any) => category.name);

    res.json(categoryNames);
  } catch (error) {
    console.error("Error fetching product categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
