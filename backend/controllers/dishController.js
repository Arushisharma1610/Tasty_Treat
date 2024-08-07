// import Dish from '../models/dish.js';
// import path from 'path';
// import fs from 'fs';

// export const createDish = async (req, res) => {
//   try {
//     const { dish_name, description, price, portion_size, status } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const newDish = await Dish.create({
//       dish_name,
//       description,
//       price,
//       portion_size,
//       status,
//       image
//     });

//     res.status(201).json(newDish);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getDishes = async (req, res) => {
//   try {
//     const dishes = await Dish.findAll();
//     res.status(200).json(dishes);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getDishById = async (req, res) => {
//   try {
//     const dish = await Dish.findByPk(req.params.id);
//     if (!dish) return res.status(404).json({ message: 'Dish not found' });
//     res.status(200).json(dish);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateDish = async (req, res) => {
//   try {
//     const { dish_name, description, price, portion_size, status } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const [updated] = await Dish.update({
//       dish_name,
//       description,
//       price,
//       portion_size,
//       status,
//       image
//     }, {
//       where: { dish_id: req.params.id }
//     });

//     if (updated) {
//       const updatedDish = await Dish.findByPk(req.params.id);
//       res.status(200).json(updatedDish);
//     } else {
//       res.status(404).json({ message: 'Dish not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteDish = async (req, res) => {
//   try {
//     const deleted = await Dish.destroy({ where: { dish_id: req.params.id } });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Dish not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


import Dish from '../models/dish.js';
import path from 'path';
import fs from 'fs';

// Create a new dish
export const createDish = async (req, res) => {
  try {
    const { dish_name, description, price, portion_size, status } = req.body;
    const image = req.file ? req.file.filename : null;

    const newDish = await Dish.create({
      dish_name,
      description,
      price,
      portion_size,
      status,
      image
    });

    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all dishes
export const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.findAll();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a dish by ID
export const getDishById = async (req, res) => {
  try {
    const dish = await Dish.findByPk(req.params.id);
    if (!dish) return res.status(404).json({ message: 'Dish not found' });
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a dish by ID
export const updateDish = async (req, res) => {
  try {
    const { dish_name, description, price, portion_size, status } = req.body;
    const image = req.file ? req.file.filename : null;

    const [updated] = await Dish.update({
      dish_name,
      description,
      price,
      portion_size,
      status,
      image
    }, {
      where: { dish_id: req.params.id }
    });

    if (updated) {
      const updatedDish = await Dish.findByPk(req.params.id);
      res.status(200).json(updatedDish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a dish by ID
// export const deleteDish = async (req, res) => {
//   try {
//     const deleted = await Dish.destroy({ where: { dish_id: req.params.id } });
//     if (deleted) {
//       res.status(204).send(); // No content
//     } else {
//       res.status(404).json({ message: 'Dish not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteDish = async (req, res) => {
//   try {
//     const deleted = await Dish.destroy({ where: { dish_id: req.params.id } });
//     if (deleted) {
//       res.status(204).send(); // No content
//     } else {
//       res.status(404).json({ message: 'Dish not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting dish:', error.message);
//     res.status(500).json({ error: 'Failed to delete dish' });
//   }
// };

// Delete a dish by ID
export const deleteDish = async (req, res) => {
  try {
    const dishId = req.params.id;
    console.log('Deleting dish with ID:', dishId); // Log the ID for debugging

    // Ensure dish_id is correctly referenced
    const deleted = await Dish.destroy({ where: { dish_id: dishId } });

    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    console.error('Error deleting dish:', error.message); // Detailed error logging
    res.status(500).json({ error: 'Failed to delete dish' });
  }
};


// export const deleteDish = async (req, res) => {
//   const transaction = await sequelize.transaction();
  
//   try {
//     const dishId = req.params.id;
//     console.log('Deleting dish with ID:', dishId); // Log the ID for debugging

//     // Delete related records in the orders table
//     await Order.destroy({
//       where: { dish_id: dishId },
//       transaction,
//     });

//     // Delete the dish
//     const deleted = await Dish.destroy({
//       where: { dish_id: dishId },
//       transaction,
//     });

//     if (deleted) {
//       await transaction.commit();
//       res.status(204).send(); // No content
//     } else {
//       await transaction.rollback();
//       res.status(404).json({ message: 'Dish not found' });
//     }
//   } catch (error) {
//     await transaction.rollback();
//     console.error('Error deleting dish:', error.message); // Detailed error logging
//     res.status(500).json({ error: 'Failed to delete dish' });
//   }
// };