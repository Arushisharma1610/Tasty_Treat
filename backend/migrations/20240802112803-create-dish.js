'use strict';
import { DataTypes } from 'sequelize';

export async function up(queryInterface) {
  return queryInterface.createTable('dish', {
    dish_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    portion_size: {
      type: DataTypes.ENUM('Single', 'Double', 'Family Size', 'Large', 'Half Portion')
    },
    status: {
      type: DataTypes.ENUM('Available', 'Sold Out', 'In Preparation')
    },
    image: {
      type: DataTypes.STRING
    }
  });
}

export async function down(queryInterface) {
  return queryInterface.dropTable('dish');
}

