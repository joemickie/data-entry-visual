import express, { Request, Response } from "express";
import Order from "../models/order";
import { createOrder } from "../controllers/createOrder";
import { getAllOrders } from "../controllers/getAllOrders";

const router = express.Router();

router.get("/number-of-orders", async (req: Request, res: Response) => {
  try {
    const numberOfOrders = await Order.count();
    res.json({ numberOfOrders });
  } catch (error) {
    console.error("Error fetching number of orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getAllOrders", getAllOrders)

router.post("/create", createOrder)

export default router;
