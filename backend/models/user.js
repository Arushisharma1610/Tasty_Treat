// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// const User = sequelize.define('User', {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// export default User;


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cartData: {
    type: DataTypes.JSONB, // Use JSONB for PostgreSQL
    allowNull: true,       // Allow null if cartData can be empty
    defaultValue: {}
  }
});

export default User;
