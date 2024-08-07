// import React from "react";

// import "../../../styles/product-card.css";

// import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const ProductCard = (props) => {
//   const { id, title, image, price } = props.item;
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         image,
//         price,
//       })
//     );
//   };

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={image} alt="product-img" className="w-50" />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/foods/${id}`}>{title}</Link>
//         </h5>
//         <div className=" d-flex align-items-center justify-content-between ">
//           <span className="product__price">${price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import React from "react";
// import "../../../styles/product-card.css";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const ProductCard = (props) => {
//   const { id, title, image01, price } = props.item;
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         image01,
//         price,
//       })
//     );
//   };

//   // Assuming your server serves images from the /uploads directory
//   const imageUrl = `http://localhost:5001/uploads/${image01}`;

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={imageUrl} alt={title} className="w-50" />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/foods/${id}`}>{title}</Link>
//         </h5>
//         <div className="d-flex align-items-center justify-content-between">
//           <span className="product__price">${price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// import React from "react";
// import "../../../styles/product-card.css";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const ProductCard = (props) => {
//   const { id, dish_name, image, price } = props.item; // Make sure 'image' is the filename
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         dish_name,
//         image,
//         price,
//       })
//     );
//   };

//   // Base URL for fetching images from your server
//   const baseURL = "http://localhost:5001";
//   const imageUrl = `${baseURL}/uploads/${image}`;

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={imageUrl} alt={dish_name} className="w-50" />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/dishes/${id}`}>{dish_name}</Link>
//         </h5>
//         <div className="d-flex align-items-center justify-content-between">
//           <span className="product__price">${price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;





// import React from "react";
// import "../../../styles/product-card.css";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const ProductCard = ({ item, addToCart }) => {
//   const { id, dish_name, image, price } = item; // Adjust property names based on API

//   // Base URL for fetching images from your server
//   const baseURL = "http://localhost:5001";
//   const imageUrl = `${baseURL}/uploads/${image}`;

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={imageUrl} alt={dish_name} className="w-50" />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/dishes/${id}`}>{dish_name}</Link>
//         </h5>
//         <div className="d-flex align-items-center justify-content-between">
//           <span className="product__price">${price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// import React from "react";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";
// import "../../../styles/product-card.css";
// import { Link } from "react-router-dom";

// const ProductCard = (props) => {
//   const { dish_id, dish_name, image, price } = props.item; // Use dish_id from API
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id: dish_id,  // Use dish_id as the unique identifier
//         title: dish_name,  // Use the correct property name
//         image,
//         price,
//       })
//     );
//   };

//   const baseURL = "http://localhost:5001";
//   const imageUrl = `${baseURL}/uploads/${image}`;

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={imageUrl} alt={dish_name} className="w-50" />
//       </div>
//       <div className="product__content">
//         <h5>
//           <Link to={`/dishes/${dish_id}`}>{dish_name}</Link>
//         </h5>
//         <div className="d-flex align-items-center justify-content-between">
//           <span className="product__price">${price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductCard = (props) => {
  const { dish_id, dish_name, image, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = async () => {
    try {
      // Replace this URL with the actual endpoint for adding items to the cart
      const apiUrl = "http://localhost:5001/api/cart/add";
      const token = localStorage.getItem('token'); // Retrieve the token from local storage

      // Make API call to add item to cart
      const response = await axios.post(apiUrl, 
        { dish_id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        dispatch(
          cartActions.addItem({
            id: dish_id,
            title: dish_name,
            image,
            price,
          })
        );
        console.log('Item added to cart successfully');
      } else {
        console.log('Failed to add item to cart:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const baseURL = "http://localhost:5001";
  const imageUrl = `${baseURL}/uploads/${image}`;

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={imageUrl} alt={dish_name} className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/dishes/${dish_id}`}>{dish_name}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




