import { Request, Response } from "express";
import Order from "../models/order";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll({});
    if (orders.length === 0) {
      return res.status(404).json({
        message: `No orders found`,
      });
    }
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
