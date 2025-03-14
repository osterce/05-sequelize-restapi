import { where } from "sequelize";
import { Client } from "../models/Client.js";
import { Order } from "../models/Order.js";

export const getClientes = async (req, res) => {
  try {
    const clients = await Client.findAll()
    res.json( clients );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClients = async (req, res) => {
  const { name, email }= req.body;
  try {
    const newClient = await Client.create ({
      name,
      email
    })
    res.json( newClient );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const client = await Client.findByPk( id );
    client.name = name;
    client.email = email;
    await client.save();
    res.json(client);
  } catch (error) {
    return res.status(500).json( {message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await Client.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message:error.message });
  }
};

export const getByIdCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where:{
        id,
      },
    });
    if(!client) return res.status(200).json({message: `No existe el cliente ${id}`})
    res.json( client );
  } catch (error) {
    return res.status(500).json( {message: error.message });
  }
};

export const getClientOrder = async(req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.findAll({
      where: { clientId: id }
    });
    res.json( orders )
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};