import { Router } from "express";
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from "../controllers/order.controller.js";

const router = Router();

router.get('/pedidos', getOrders);
router.get('/pedidos/:id', getOrderById);
router.post('/pedidos', createOrder);
router.put('/pedidos/:id', updateOrder);
router.delete('/pedidos/:id', deleteOrder);

export default router;