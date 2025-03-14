import { DataTypes } from 'sequelize';
import { sequelize }  from '../database/database.js';
import { Order } from './Order.js';

export const Client = sequelize.define( 'client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
});

Client.hasMany( Order, {
  foreignKey: 'clientId',
  sourceKey: 'id'
})

Order.belongsTo( Client, {
  foreignKey: 'clientId',
  targetId: 'id'
})