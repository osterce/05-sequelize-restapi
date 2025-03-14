import { Router } from "express";
import { getClientes, createClients, updateCliente, deleteCliente, getByIdCliente, getClientOrder } from "../controllers/client.controller.js";

const router = Router();

router.get( '/clientes', getClientes );
router.get( '/clientes/:id', getByIdCliente );
router.post( '/clientes', createClients);
router.put( '/clientes/:id', updateCliente);
router.delete( '/clientes/:id', deleteCliente);

router.get( '/clientes/:id/pedidos', getClientOrder );

export default router;