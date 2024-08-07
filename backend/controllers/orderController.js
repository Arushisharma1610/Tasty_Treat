// *****************************************************correct code*****************************************************************//


// import Order from '../models/order.js';
// import Dish from '../models/dish.js'; // Import Dish model if you want to validate dish_id

// // Create a new order
// export const createOrder = async (req, res) => {
//   try {
//     const { dish_id, quantity, total_price } = req.body;

//     // Optional: Validate dish_id exists
//     const dish = await Dish.findByPk(dish_id);
//     if (!dish) return res.status(400).json({ message: 'Invalid dish_id' });

//     // Create order
//     const newOrder = await Order.create({
//       dish_id,
//       quantity,
//       total_price
//     });

//     res.status(201).json(newOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get all orders
// export const getOrders = async (req, res) => {
//   try {
//     const orders = await Order.findAll();
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get an order by ID
// export const getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findByPk(req.params.id);
//     if (!order) return res.status(404).json({ message: 'Order not found' });
//     res.status(200).json(order);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update an order by ID
// export const updateOrder = async (req, res) => {
//   try {
//     const { dish_id, quantity, total_price } = req.body;

//     // Optional: Validate dish_id exists
//     const dish = await Dish.findByPk(dish_id);
//     if (!dish) return res.status(400).json({ message: 'Invalid dish_id' });

//     const [updated] = await Order.update({
//       dish_id,
//       quantity,
//       total_price
//     }, {
//       where: { order_id: req.params.id }
//     });

//     if (updated) {
//       const updatedOrder = await Order.findByPk(req.params.id);
//       res.status(200).json(updatedOrder);
//     } else {
//       res.status(404).json({ message: 'Order not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete an order by ID
// export const deleteOrder = async (req, res) => {
//   try {
//     const deleted = await Order.destroy({ where: { order_id: req.params.id } });
//     if (deleted) {
//       res.status(204).send(); // No content
//     } else {
//       res.status(404).json({ message: 'Order not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };









// import Order from '../models/order.js';
// import Dish from '../models/dish.js'; // Import Dish model if needed for validation

// // Create a new order
// export const createOrder = async (req, res) => {
//   try {
//     const { userId, dish_data, quantity, total_price, address, status, payment_details } = req.body;

//     // Optional: Validate userId exists
//     // Validate that all dish_ids in dish_data exist
//     for (const dishId in dish_data) {
//       const dish = await Dish.findByPk(dishId);
//       if (!dish) return res.status(400).json({ message: `Invalid dish_id: ${dishId}` });
//     }

//     // Create order
//     const newOrder = await Order.create({
//       userId,
//       dish_data,
//       quantity,
//       total_price,
//       address,
//       status,
//       payment_details
//     });

//     res.status(201).json(newOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get all orders
// export const getOrders = async (req, res) => {
//   try {
//     const orders = await Order.findAll();
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// code with stripe
import Order from '../models/order.js';
import Dish from '../models/dish.js'; // Import Dish model if needed for validation
import stripe from '../config/stripe.js'; // Import Stripe configuration
// import Stripe from 'stripe';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';


// stripe = new Stripe(process.env.STRIPE_SECRET_KEY);






// Create a new order
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create a new order
// export const createOrder = async (req, res) => {
//   try {
//     const { userId, dish_data, quantity, total_price, address, status, payment_details } = req.body;

//     // Validate dish_ids in dish_data
//     for (const dishId in dish_data) {
//       const dish = await Dish.findByPk(dishId);
//       if (!dish) return res.status(400).json({ message: `Invalid dish_id: ${dishId}` });
//     }

//     // Create a payment intent with Stripe
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total_price * 100, // Amount in cents
//       currency: 'usd', // Change this to your currency code
//       payment_method: payment_details.payment_method_id,
//       confirmation_method: 'manual',
//       confirm: true,
//     });

//     // Check payment status
//     if (paymentIntent.status === 'succeeded') {
//       // Create order in database
//       const newOrder = await Order.create({
//         userId,
//         dish_data,
//         quantity,
//         total_price,
//         address,
//         status,
//         payment_details
//       });

//       res.status(201).json(newOrder);
//     } else {
//       // Payment not successful
//       res.status(400).json({ message: 'Payment failed' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const createOrder = async (req, res) => {
//   try {
//     const { userId, dish_data, quantity, total_price, address, status, payment_details } = req.body;

//     // Optional: Validate userId exists
//     // Validate that all dish_ids in dish_data exist
//     for (const dishId in dish_data) {
//       const dish = await Dish.findByPk(dishId);
//       if (!dish) return res.status(400).json({ message: `Invalid dish_id: ${dishId}` });
//     }

//     // Create order
//     const newOrder = await Order.create({
//       userId,
//       dish_data,
//       quantity,
//       total_price,
//       address,
//       status,
//       payment_details
//     });

//     res.status(201).json(newOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



export const createOrder = async (req, res) => {
  try {
    const { userId, dish_data, quantity, total_price, address, status, payment_details } = req.body;

    // Validate required fields
    if (!userId || !dish_data || !quantity || !total_price || !address || !status || !payment_details) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate dish_ids
    for (const dish of dish_data) {
      const dishRecord = await Dish.findByPk(dish.dish_id); // Assuming dish_data contains dish_id and quantity
      if (!dishRecord) {
        return res.status(400).json({ message: `Invalid dish_id: ${dish.dish_id}` });
      }
    }

    // Create order
    const newOrder = await Order.create({
      userId,
      dish_data,
      quantity,
      total_price,
      address,
      status,
      payment_details
    });

    // Optionally, you might want to send a confirmation email or perform additional tasks here

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Order creation error:', error); // Log error details for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
};







// // Webhook for Stripe
// export const handleStripeWebhook = async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

//     if (event.type === 'checkout.session.completed') {
//       const session = event.data.object;
//       const orderId = session.metadata.order_id;

//       // Update order status or create order in the database
//       const updatedOrder = await Order.update({ status: 'Paid' }, {
//         where: { id: orderId },
//       });

//       res.status(200).json({ received: true });
//     } else {
//       res.status(400).json({ message: 'Event type not handled' });
//     }
//   } catch (err) {
//     res.status(400).json({ error: `Webhook Error: ${err.message}` });
//   }
// };











// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get an order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an order by ID
export const updateOrder = async (req, res) => {
  try {
    const { dish_data, quantity, total_price, address, status, payment_details } = req.body;

    // Optional: Validate dish_data
    for (const dishId in dish_data) {
      const dish = await Dish.findByPk(dishId);
      if (!dish) return res.status(400).json({ message: `Invalid dish_id: ${dishId}` });
    }

    const [updated] = await Order.update({
      dish_data,
      quantity,
      total_price,
      address,
      status,
      payment_details
    }, {
      where: { order_id: req.params.id }
    });

    if (updated) {
      const updatedOrder = await Order.findByPk(req.params.id);
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.destroy({ where: { order_id: req.params.id } });
    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
