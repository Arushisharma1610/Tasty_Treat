// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import sequelize from './config/database.js';
// import dishRoutes from './routes/dishRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static('public/uploads'));

// app.use('/api/dishes', dishRoutes);
// app.use('/api/orders', orderRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Sync models
// sequelize.sync({ alter: true }).then(() => {
//   console.log('Database synced');
// }).catch(err => {
//   console.error('Failed to sync database:', err);
// });


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import sequelize from './config/database.js';
// import dishRoutes from './routes/dishRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import cartRoutes from './routes/cartRoutes.js'
// import Stripe from 'stripe';
// // import handleStripeWebhook from './controllers/orderController.js'

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5001;
// // const cors=require('cors')

// // CORS configuration
// // app.use(cors({
// //   origin: 'http://localhost:5000', // Frontend URL
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Content-Type', 'Authorization']
// // }));

// // app.use(cors({
// //   origin: ['http://localhost:3000', 'http://localhost:3001'], // Array of allowed origins
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Content-Type', 'Authorization']
// // }));

// // app.options('*', cors({
// //   origin: ['http://localhost:3000', 'http://localhost:3001'],
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Content-Type', 'Authorization']
// // }));
// // const cors=require('cors');

// app.use(cors({origin:true}));


// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static('public/uploads'));




// // Routes
// app.use('/api/dishes', dishRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/auth', authRoutes);
// // app.post('/api/auth/register', registerUser);
// // app.post('/api/auth/login', loginUser);
// app.use('/api/cart' , cartRoutes);



// // stripe payment
// // app.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook);


// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// app.post('/create-checkout-session', async (req, res) => {
//   try {
//     const { amount } = req.body; // Amount should be in the smallest currency unit, e.g., cents

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd', // Change to your currency
//             product_data: {
//               name: 'Tasty Treat Order', // Product name
//             },
//             unit_amount: amount, // Amount in cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.CLIENT_URL}/success`,
//       cancel_url: `${process.env.CLIENT_URL}/canceled`,
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });




// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Server listening
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Sync models
// sequelize.sync({ alter: true }).then(() => {
//   console.log('Database synced');
// }).catch(err => {
//   console.error('Failed to sync database:', err);
// });











import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import dishRoutes from './routes/dishRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import Stripe from 'stripe';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('public/uploads'));

// Routes
app.use('/api/dishes', dishRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

// Stripe payment
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { amount } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Tasty Treat Order',
            },
            unit_amount: amount * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/canceled`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sync models
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Failed to sync database:', err);
});
