import { where } from "sequelize";
import { Order } from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json( orders );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getOrderById = async(req, res) => {
  try {
    const { id } = req.params;
    const orderById = await Order.findOne({
      where: { id },
      //attributes: ['date'] // solo muestra el atributo indicado (proyecciones)
    });
    res.json( orderById );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export const createOrder = async (req, res) => {
  try {
    const { date, total, clientId } = req.body;
    const newOrder = await Order.create({
      date,
      total,
      clientId
    });
    res.json( newOrder );
  } catch (error) {
    return res.status(500).json({ message:error.message });
  }
}

export const updateOrder = async(req, res) => {
  try {
    const { id } = req.params;
    /* const { date, total, clientId } = req.body;
      const order = await Order.findByPk( id );
      order.date = date;
      order.total = total;
      order.clientId = clientId; */
    const order = await Order.findByPk( id );
    order.set( req.body );
    await order.save();
    res.json( order );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteOrder = async(req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk( id );
    if( !order ) return res.status(404).json({ error: `Pedido ${ id } no encontrado`})
    await Order.destroy({
      where: { id }
    });
    res.json({ message: `Pedido ${ id } Eliminado` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}