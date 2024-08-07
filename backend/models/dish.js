// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// const Dish = sequelize.define('Dish', {
//   dish_id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true
//   },
//   dish_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.TEXT
//   },
//   price: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false
//   },
//   portion_size: {
//     type: DataTypes.ENUM('Single', 'Double', 'Family Size', 'Large', 'Half Portion')
//   },
//   status: {
//     type: DataTypes.ENUM('Available', 'Sold Out', 'In Preparation')
//   },
//   image: {
//     type: DataTypes.STRING
//   }
// }, {
//   tableName: 'hotel.dish'
// });

// export default Dish;


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Dish = sequelize.define('Dish', {
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
}, {
  tableName: 'dish' // Remove schema and use only table name
  // schema: 'hotel' // You can add schema if necessary
});

export default Dish;
