'use strict';
// import { DataTypes } from 'sequelize';

// export async function up(queryInterface) {
//   return queryInterface.createTable('orders', {
//     order_id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true
//     },
//     dish_id: {
//       type: DataTypes.UUID,
//       references: {
//         model: 'dish',
//         key: 'dish_id'
//       }
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     order_date: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW
//     },
//     total_price: {
//       type: DataTypes.DECIMAL(10, 2)
//     }
//   });
// }

// export async function down(queryInterface) {
//   return queryInterface.dropTable('orders');
// }

import { DataTypes } from 'sequelize';

export async function up(queryInterface) {
  return queryInterface.createTable('orders', {
    order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Ensure this matches the User model name
        key: 'id'
      },
      onDelete: 'CASCADE' // Optional: defines what happens when a referenced user is deleted
    },
    dish_data: {
      type: DataTypes.JSONB, // Use JSONB for PostgreSQL
      allowNull: true, // Allow null if dish_data can be empty
      defaultValue: {} // Default value as an empty object
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2)
    },
    address: {
      type: DataTypes.STRING, // Add additional columns as needed
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
      defaultValue: 'Pending'
    },
    payment_details: {
      type: DataTypes.JSON, // Store JSON data for payment details
      allowNull: false
    }
  });
}

export async function down(queryInterface) {
  return queryInterface.dropTable('orders');
}
