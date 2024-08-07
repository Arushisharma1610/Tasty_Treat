import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Token = sequelize.define('Token', {
  token: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});

export default Token;
