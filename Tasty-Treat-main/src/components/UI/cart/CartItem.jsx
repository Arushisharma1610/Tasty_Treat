// import React from "react";
// import { ListGroupItem } from "reactstrap";

// import "../../../styles/cart-item.css";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const CartItem = ({ item }) => {
//   const { id, title, price, image01, quantity, totalPrice } = item;

//   const dispatch = useDispatch();

//   const incrementItem = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         price,
//         image01,
//       })
//     );
//   };

//   const decreaseItem = () => {
//     dispatch(cartActions.removeItem(id));
//   };

//   const deleteItem = () => {
//     dispatch(cartActions.deleteItem(id));
//   };

//   return (
//     <ListGroupItem className="border-0 cart__item">
//       <div className="cart__item-info d-flex gap-2">
//         <img src={image01} alt="product-img" />

//         <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
//           <div>
//             <h6 className="cart__product-title">{title}</h6>
//             <p className=" d-flex align-items-center gap-5 cart__product-price">
//               {quantity}x <span>${totalPrice}</span>
//             </p>
//             <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
//               <span className="increase__btn" onClick={incrementItem}>
//                 <i class="ri-add-line"></i>
//               </span>
//               <span className="quantity">{quantity}</span>
//               <span className="decrease__btn" onClick={decreaseItem}>
//                 <i class="ri-subtract-line"></i>
//               </span>
//             </div>
//           </div>

//           <span className="delete__btn" onClick={deleteItem}>
//             <i class="ri-close-line"></i>
//           </span>
//         </div>
//       </div>
//     </ListGroupItem>
//   );
// };

// export default CartItem;


// import React from "react";
// import { ListGroupItem } from "reactstrap";
// import "../../../styles/cart-item.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const CartItem = ({ item }) => {
//   const { id, title, price, image, quantity, totalPrice } = item; // Use 'image' instead of 'image01'

//   const dispatch = useDispatch();

//   const incrementItem = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         price,
//         image,
//       })
//     );
//   };

//   const decreaseItem = () => {
//     dispatch(cartActions.removeItem(id));
//   };

//   const deleteItem = () => {
//     dispatch(cartActions.deleteItem(id));
//   };

//   // Base URL for fetching images from your server
//   const baseURL = "http://localhost:5001";
//   const imageUrl = `${baseURL}/uploads/${image}`;

//   return (
//     <ListGroupItem className="border-0 cart__item">
//       <div className="cart__item-info d-flex gap-2">
//         <img src={imageUrl} alt="product-img" className="cart-item-image" />

//         <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
//           <div>
//             <h6 className="cart__product-title">{title}</h6>
//             <p className="d-flex align-items-center gap-5 cart__product-price">
//               {quantity}x <span>${totalPrice}</span>
//             </p>
//             <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
//               <span className="increase__btn" onClick={incrementItem}>
//                 <i className="ri-add-line"></i>
//               </span>
//               <span className="quantity">{quantity}</span>
//               <span className="decrease__btn" onClick={decreaseItem}>
//                 <i className="ri-subtract-line"></i>
//               </span>
//             </div>
//           </div>

//           <span className="delete__btn" onClick={deleteItem}>
//             <i className="ri-close-line"></i>
//           </span>
//         </div>
//       </div>
//     </ListGroupItem>
//   );
// };

// export default CartItem;


// import React from "react";
// import { ListGroupItem } from "reactstrap";
// import "../../../styles/cart-item.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const CartItem = ({ item }) => {
//   const { id, title, price, image, quantity, totalPrice } = item;

//   const dispatch = useDispatch();

//   const incrementItem = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         price,
//         image,
//       })
//     );
//   };

//   const decreaseItem = () => {
//     dispatch(cartActions.removeItem(id));
//   };

//   const deleteItem = () => {
//     dispatch(cartActions.deleteItem(id));
//   };

//   // Base URL for fetching images from your server
//   const baseURL = "http://localhost:5001";
//   const imageUrl = `${baseURL}/uploads/${image}`; // Correct URL for images

//   return (
//     <ListGroupItem className="border-0 cart__item">
//       <div className="cart__item-info d-flex gap-2">
//         <img src={imageUrl} alt={title} className="cart-item-image" />

//         <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
//           <div>
//             <h6 className="cart__product-title">{title}</h6>
//             <p className="d-flex align-items-center gap-5 cart__product-price">
//               {quantity}x <span>${totalPrice}</span>
//             </p>
//             <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
//               <span className="increase__btn" onClick={incrementItem}>
//                 <i className="ri-add-line"></i>
//               </span>
//               <span className="quantity">{quantity}</span>
//               <span className="decrease__btn" onClick={decreaseItem}>
//                 <i className="ri-subtract-line"></i>
//               </span>
//             </div>
//           </div>

//           <span className="delete__btn" onClick={deleteItem}>
//             <i className="ri-close-line"></i>
//           </span>
//         </div>
//       </div>
//     </ListGroupItem>
//   );
// };

// export default CartItem;


// import React from "react";
// import { ListGroupItem } from "reactstrap";
// import "../../../styles/cart-item.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const CartItem = ({ item }) => {
//   const { id, title, price, image, quantity, totalPrice } = item;

//   const dispatch = useDispatch();

//   const incrementItem = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         price,
//         image,
//       })
//     );
//   };

//   const decreaseItem = () => {
//     dispatch(cartActions.removeItem(id));
//   };

//   const deleteItem = () => {
//     dispatch(cartActions.deleteItem(id));
//   };

//   // Base URL for fetching images from your server
//   const baseURL = "http://localhost:5001";
//   const imageUrl = image ? `${baseURL}/uploads/${image}` : `${baseURL}/uploads/default.png`;

//   console.log("Image URL:", imageUrl); // Debugging line
//   console.log("Cart Item Data:", item); // Debugging line

//   return (
//     <ListGroupItem className="border-0 cart__item">
//       <div className="cart__item-info d-flex gap-2">
//         <img src={imageUrl} alt={title} className="cart-item-image" />

//         <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
//           <div>
//             <h6 className="cart__product-title">{title}</h6>
//             <p className="d-flex align-items-center gap-5 cart__product-price">
//               {quantity}x <span>${totalPrice}</span>
//             </p>
//             <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
//               <span className="increase__btn" onClick={incrementItem}>
//                 <i className="ri-add-line"></i>
//               </span>
//               <span className="quantity">{quantity}</span>
//               <span className="decrease__btn" onClick={decreaseItem}>
//                 <i className="ri-subtract-line"></i>
//               </span>
//             </div>
//           </div>

//           <span className="delete__btn" onClick={deleteItem}>
//             <i className="ri-close-line"></i>
//           </span>
//         </div>
//       </div>
//     </ListGroupItem>
//   );
// };

// export default CartItem;



import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import axios from 'axios';

const CartItem = ({ item }) => {
  const { id, title, price, image, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  // Base URL for fetching images from your server
  const baseURL = "http://localhost:5001";
  const imageUrl = image ? `${baseURL}/uploads/${image}` : `${baseURL}/uploads/default.png`;

  // Increment item quantity in the backend and update Redux store
  const incrementItem = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/cart/add", // Replace with your actual API endpoint
        { dish_id: id },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );

      if (response.data.success) {
        dispatch(
          cartActions.addItem({
            id,
            title,
            price,
            image,
          })
        );
      } else {
        console.log('Failed to increment item:', response.data.message);
      }
    } catch (error) {
      console.error('Error incrementing item:', error);
    }
  };

  // Decrease item quantity in the backend and update Redux store
  const decreaseItem = async () => {
    try {
      // Make a DELETE request to the backend to decrement the item quantity
      const response = await axios.delete(
        "http://localhost:5001/api/cart/remove",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          data: { dish_id: id } // Axios expects the body in a `data` property for DELETE requests
        }
      );
  
      // Check if the response is successful
      if (response.data.success) {
        // Check if item quantity is greater than 1, if so, only update Redux store
        if (quantity > 1) {
          dispatch(cartActions.removeItem(id));
        } else {
          // Remove item if quantity is 1
          dispatch(cartActions.deleteItem(id));
        }
      } else {
        // Log failure message from backend
        console.log('Failed to decrement item:', response.data.message);
      }
    } catch (error) {
      // Log error details
      console.error('Error decrementing item:', error.response ? error.response.data : error.message);
    }
  };
  
  


  // Delete item from the backend and update Redux store
  const deleteItem = async () => {
    try {
      // Make a DELETE request to the backend with dish_id in the request body
      const response = await axios.delete(
        "http://localhost:5001/api/cart/remove", // Your API endpoint
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          data: { dish_id: id } // Axios requires the body in the `data` property for DELETE requests
        }
      );
  
      // Check if the response indicates success
      if (response.data.success) {
        // Update Redux store to reflect item removal
        dispatch(cartActions.deleteItem(id));
      } else {
        // Log failure message from the backend
        console.log('Failed to delete item:', response.data.message);
      }
    } catch (error) {
      // Log error details
      console.error('Error deleting item:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={imageUrl} alt={title} className="cart-item-image" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
