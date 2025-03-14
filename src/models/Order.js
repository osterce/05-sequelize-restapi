import { DataTypes } from 'sequelize';
import { sequelize }  from '../database/database.js';

export const Order = sequelize.define( 'order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE
  },
  total: {
    type: DataTypes.FLOAT
  }
});