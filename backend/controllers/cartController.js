import User from '../models/user.js';
import Token from '../models/token.js';

// const addToCart = async (req, res) => {
//   try {
//     const { dish_id } = req.body;
//     const token = req.headers.authorization.split(' ')[1];

//     // Verify if the token is valid and get the userId
//     const tokenRecord = await Token.findOne({ where: { token } });
//     if (!tokenRecord) {
//       return res.status(401).json({ success: false, message: 'Invalid token' });
//     }

//     const userId = tokenRecord.userId; // Extract userId from token record
//     console.log(`Adding dish ${dish_id} to cart for user ${userId}`);

//     // Find the user using the primary key (id)
//     const user = await User.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     let cartData = user.cartData || {};
//     console.log('Cart data before update:', cartData);
//     // Add or update the dish in the cart
//     if (!cartData[dish_id]) {
//       cartData[dish_id] = 1;
//     } else {
//       cartData[dish_id] += 1;
//     }
//     console.log(`Updating cart data: ${JSON.stringify(cartData)}`);

//     // Update the user's cart data
//     await user.update({ cartData });

//     res.json({ success: true, message: 'Added to cart' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error adding to cart' });
//   }
// };



const addToCart = async (req, res) => {
  try {
    const { dish_id } = req.body;
    const token = req.headers.authorization.split(' ')[1];

    // Verify if the token is valid and get the userId
    const tokenRecord = await Token.findOne({ where: { token } });
    if (!tokenRecord) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    const userId = tokenRecord.userId; // Extract userId from token record
    console.log(`User ID from token: ${userId}`);

    // Find the user using the primary key (id)
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let cartData = user.cartData || {};
    console.log('Cart data before update:', cartData);

    // Add or update the dish in the cart
    if (!cartData[dish_id]) {
      cartData[dish_id] = 1;
    } else {
      cartData[dish_id] += 1;
    }
    console.log(`Updating cart data: ${JSON.stringify(cartData)}`);

    // Update the user's cart data
    // Use the update method without destructuring assignment
    await User.update({ cartData }, { where: { id: userId } });

    // Verify the update
    const updatedUser = await User.findByPk(userId);
    console.log('Updated user cart data:', updatedUser.cartData);

    res.json({ success: true, message: 'Added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ success: false, message: 'Error adding to cart' });
  }
};




// Remove all items from user cart
// const removeAllFromCart = async (req, res) => {
//   try {
//     const { dish_id } = req.body;
//     const token = req.headers.authorization.split(' ')[1];

//     // Verify if the token is valid and get the userId
//     const tokenRecord = await Token.findOne({ where: { token } });
//     if (!tokenRecord) {
//       return res.status(401).json({ success: false, message: 'Invalid token' });
//     }

//     const userId = tokenRecord.userId; // Extract userId from token record
//     console.log(`User ID from token: ${userId}`);

//     // Find the user using the primary key (id)
//     const user = await User.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     let cartData = user.cartData || {};
//     console.log('Cart data before update:', cartData);

//     // Remove the dish from the cart
//     if (cartData[dish_id]) {
//       delete cartData[dish_id];
//     } else {
//       return res.status(404).json({ success: false, message: 'Item not found in cart' });
//     }

//     console.log(`Updating cart data: ${JSON.stringify(cartData)}`);

//     // Update the user's cart data
//     // Use the update method directly on the User model
//     await User.update({ cartData }, { where: { id: userId } });

//     // Verify the update
//     const updatedUser = await User.findByPk(userId);
//     console.log('Updated user cart data:', updatedUser.cartData);

//     res.json({ success: true, message: 'Removed from cart' });
//   } catch (error) {
//     console.error('Error removing from cart:', error);
//     res.status(500).json({ success: false, message: 'Error removing from cart' });
//   }
// };




// const removeAllFromCart = async (req, res) => {
//   try {
//     const { dish_id } = req.body;
//     console.log('Received dish_id:', dish_id); // Log dish_id

//     const token = req.headers.authorization.split(' ')[1];
//     console.log('Received token:', token); // Log token

//     const tokenRecord = await Token.findOne({ where: { token } });
//     if (!tokenRecord) {
//       console.log('Invalid token');
//       return res.status(401).json({ success: false, message: 'Invalid token' });
//     }

//     const userId = tokenRecord.userId;
//     console.log('User ID from token:', userId);

//     const user = await User.findByPk(userId);
//     if (!user) {
//       console.log('User not found');
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     let cartData = user.cartData || {};
//     console.log('Cart data before update:', cartData);

//     if (cartData[dish_id]) {
//       delete cartData[dish_id];
//     } else {
//       console.log('Item not found in cart');
//       return res.status(404).json({ success: false, message: 'Item not found in cart' });
//     }

//     await User.update({ cartData }, { where: { id: userId } });

//     const updatedUser = await User.findByPk(userId);
//     console.log('Updated user cart data:', updatedUser.cartData);

//     res.json({ success: true, message: 'Removed all instances of item from cart' });
//   } catch (error) {
//     console.error('Error removing all instances from cart:', error);
//     res.status(500).json({ success: false, message: 'Error removing all instances from cart' });
//   }
// };







const removeFromCart = async (req, res) => {
  try {
    const { dish_id } = req.body;
    const token = req.headers.authorization.split(' ')[1];

    // Verify if the token is valid and get the userId
    const tokenRecord = await Token.findOne({ where: { token } });
    if (!tokenRecord) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    const userId = tokenRecord.userId;

    // Find the user using the primary key (id)
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let cartData = user.cartData || {};

    // Remove or decrease the dish in the cart
    if (cartData[dish_id]) {
      cartData[dish_id] -= 1;
      if (cartData[dish_id] <= 0) {
        delete cartData[dish_id];
      }
    } else {
      return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }

    // Update the user's cart data
    await User.update({ cartData }, { where: { id: userId } });

    res.json({ success: true, message: 'Removed from cart', cartData });
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ success: false, message: 'Error removing from cart' });
  }
};



  // Fetch user cart data
  const getCart = async (req, res) => {
    try {
      const userId = req.userId; // Extract userId from the JWT token
  
      // Verify if the token is valid and get the userId
      const tokenRecord = await Token.findOne({ where: { token: req.headers.authorization.split(' ')[1] } });
      if (!tokenRecord) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
      }
  
      // Find the user
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      // Return the user's cart data
      res.json({
        success: true,
        cartData: user.cartData || {},
      });
    } catch (error) {
      console.error('Error fetching cart data:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching cart data',
      });
    }
  };
  
  export { addToCart, removeFromCart, getCart};

