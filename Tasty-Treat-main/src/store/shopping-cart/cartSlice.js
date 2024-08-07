// import { createSlice } from "@reduxjs/toolkit";

// const items =
//   localStorage.getItem("cartItems") !== null
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

// const totalAmount =
//   localStorage.getItem("totalAmount") !== null
//     ? JSON.parse(localStorage.getItem("totalAmount"))
//     : 0;

// const totalQuantity =
//   localStorage.getItem("totalQuantity") !== null
//     ? JSON.parse(localStorage.getItem("totalQuantity"))
//     : 0;

// const setItemFunc = (item, totalAmount, totalQuantity) => {
//   localStorage.setItem("cartItems", JSON.stringify(item));
//   localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
//   localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
// };

// const initialState = {
//   cartItems: items,
//   totalQuantity: totalQuantity,
//   totalAmount: totalAmount,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,

//   reducers: {
//     // =========== add item ============
//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.id === newItem.id
//       );
//       state.totalQuantity++;

//       if (!existingItem) {
//         // ===== note: if you use just redux you should not mute state array instead of clone the state array, but if you use redux toolkit that will not a problem because redux toolkit clone the array behind the scene

//         state.cartItems.push({
//           id: newItem.id,
//           title: newItem.title,
//           image01: newItem.image01,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//         });
//       } else {
//         existingItem.quantity++;
//         existingItem.totalPrice =
//           Number(existingItem.totalPrice) + Number(newItem.price);
//       }

//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),

//         0
//       );

//       setItemFunc(
//         state.cartItems.map((item) => item),
//         state.totalAmount,
//         state.totalQuantity
//       );
//     },

//     // ========= remove item ========

//     removeItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);
//       state.totalQuantity--;

//       if (existingItem.quantity === 1) {
//         state.cartItems = state.cartItems.filter((item) => item.id !== id);
//       } else {
//         existingItem.quantity--;
//         existingItem.totalPrice =
//           Number(existingItem.totalPrice) - Number(existingItem.price);
//       }

//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );

//       setItemFunc(
//         state.cartItems.map((item) => item),
//         state.totalAmount,
//         state.totalQuantity
//       );
//     },

//     //============ delete item ===========

//     deleteItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         state.cartItems = state.cartItems.filter((item) => item.id !== id);
//         state.totalQuantity = state.totalQuantity - existingItem.quantity;
//       }

//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );
//       setItemFunc(
//         state.cartItems.map((item) => item),
//         state.totalAmount,
//         state.totalQuantity
//       );
//     },
//   },
// });

// export const cartActions = cartSlice.actions;
// export default cartSlice;






// import { createSlice } from "@reduxjs/toolkit";

// // Retrieve initial state from localStorage or set defaults
// const items = JSON.parse(localStorage.getItem("cartItems")) || [];
// const totalAmount = JSON.parse(localStorage.getItem("totalAmount")) || 0;
// const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity")) || 0;

// // Function to update localStorage
// const setItemFunc = (item, totalAmount, totalQuantity) => {
//   localStorage.setItem("cartItems", JSON.stringify(item));
//   localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
//   localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
// };

// const initialState = {
//   cartItems: items,
//   totalQuantity: totalQuantity,
//   totalAmount: totalAmount,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      
//       // Update total quantity
//       state.totalQuantity++;

//       if (!existingItem) {
//         // Add new item to cart
//         state.cartItems.push({
//           id: newItem.id,
//           title: newItem.title,
//           image01: newItem.image01,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//         });
//       } else {
//         // Update existing item
//         existingItem.quantity++;
//         existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
//       }

//       // Update total amount
//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );

//       // Update localStorage
//       setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
//     },

//     removeItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         // Update total quantity
//         state.totalQuantity--;

//         if (existingItem.quantity === 1) {
//           // Remove item from cart
//           state.cartItems = state.cartItems.filter((item) => item.id !== id);
//         } else {
//           // Decrease item quantity
//           existingItem.quantity--;
//           existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
//         }

//         // Update total amount
//         state.totalAmount = state.cartItems.reduce(
//           (total, item) => total + Number(item.price) * Number(item.quantity),
//           0
//         );

//         // Update localStorage
//         setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
//       }
//     },

//     deleteItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         // Update total quantity
//         state.totalQuantity -= existingItem.quantity;

//         // Remove item from cart
//         state.cartItems = state.cartItems.filter((item) => item.id !== id);

//         // Update total amount
//         state.totalAmount = state.cartItems.reduce(
//           (total, item) => total + Number(item.price) * Number(item.quantity),
//           0
//         );

//         // Update localStorage
//         setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
//       }
//     },
//   },
// });

// export const cartActions = cartSlice.actions;
// export default cartSlice;










// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial state from localStorage or set defaults
const items = JSON.parse(localStorage.getItem("cartItems")) || [];
const totalAmount = JSON.parse(localStorage.getItem("totalAmount")) || 0;
const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity")) || 0;

// Function to update localStorage
const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      
      // Update total quantity
      state.totalQuantity++;

      if (!existingItem) {
        // Add new item to cart
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        // Update existing item
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
      }

      // Update total amount
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // Update localStorage
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // Update total quantity
        state.totalQuantity--;

        if (existingItem.quantity === 1) {
          // Remove item from cart
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          // Decrease item quantity
          existingItem.quantity--;
          existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
        }

        // Update total amount
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );

        // Update localStorage
        setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
      }
    },

    // deleteItem(state, action) {
    //   const id = action.payload;
    //   const existingItem = state.cartItems.find((item) => item.id === id);

    //   if (existingItem) {
    //     // Update total quantity
    //     state.totalQuantity -= existingItem.quantity;

    //     // Remove item from cart
    //     state.cartItems = state.cartItems.filter((item) => item.id !== id);

    //     // Update total amount
    //     state.totalAmount = state.cartItems.reduce(
    //       (total, item) => total + Number(item.price) * Number(item.quantity),
    //       0
    //     );

    //     // Update localStorage
    //     setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    //   }
    // },



    // deleteItem(state, action) {
    //         const id = action.payload;
    //         const existingItem = state.cartItems.find((item) => item.id === id);
      
    //         if (existingItem) {
    //           state.cartItems = state.cartItems.filter((item) => item.id !== id);
    //           state.totalQuantity = state.totalQuantity - existingItem.quantity;
    //         }
      
    //         state.totalAmount = state.cartItems.reduce(
    //           (total, item) => total + Number(item.price) * Number(item.quantity),
    //           0
    //         );
    //         setItemFunc(
    //           state.cartItems.map((item) => item),
    //           state.totalAmount,
    //           state.totalQuantity
    //         );
    //       },
        

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
    
      if (existingItem) {
        // Set the item's quantity to 0
        existingItem.quantity = 0;
        existingItem.totalPrice = 0;
    
        // Update the cart items array to remove items with quantity 0
        state.cartItems = state.cartItems.filter((item) => item.quantity > 0);
    
        // Update total quantity
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
    
        // Update total amount
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
    
        // Update localStorage
        setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
      }
    },


    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      // Clear localStorage
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
