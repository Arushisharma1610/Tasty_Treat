// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// const Order = sequelize.define('Order', {
//   order_id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true
//   },
//   dish_id: {
//     type: DataTypes.UUID,
//     references: {
//       model: 'Dish',
//       key: 'dish_id'
//     }
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   order_date: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW
//   },
//   total_price: {
//     type: DataTypes.DECIMAL(10, 2)
//   }
// }, {
//   tableName: 'hotel.orders'
// });

// export default Order;








// *****************************correct code just needs some changes************************************************************//
// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// const Order = sequelize.define('Order', {
//   order_id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true
//   },
//   dish_id: {
//     type: DataTypes.UUID,
//     references: {
//       model: 'dish', // Ensure this matches the model name
//       key: 'dish_id'
//     }
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   order_date: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW
//   },
//   total_price: {
//     type: DataTypes.DECIMAL(10, 2)
//   }
// }, {
//   tableName: 'orders' // Use only the table name
// });

// export default Order;



// models/Order.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define('Order', {
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
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
    defaultValue: 'Pending'
  },
  payment_details: {
    type: DataTypes.JSON, // Store JSON data for payment details
    allowNull: true
  }
}, {
  tableName: 'orders' // Use only the table name
});

export default Order;
