// import React, { useState, useEffect } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { loadStripe } from "@stripe/stripe-js";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { cartActions } from "../store/shopping-cart/cartSlice"; // Import the actions

// const stripePromise = loadStripe("pk_test_51PkTUPP5SChsMXQRSaFnZEguM0yCv7v4gFh39uIT31PRb9mzQ5rmMfJRWrSrjzoOXtHPSmmc3II0HOUGMmaUpkRh008JUwb0Bz");

// const PaymentPage = () => {
//   const [loading, setLoading] = useState(false);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
//   const shippingCost = 30;
//   const totalAmount = cartTotalAmount > 0 ? cartTotalAmount + shippingCost : cartTotalAmount;
//   const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!cartItems.length) {
//       navigate("/"); // Redirect to home if no items in the cart
//     }
//   }, [cartItems, navigate]);

//   const handleCheckout = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5001/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: totalAmount }), // Convert to cents
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create checkout session");
//       }

//       const { id: sessionId } = await response.json();
//       const stripe = await stripePromise;
//       const { error } = await stripe.redirectToCheckout({ sessionId });

//       if (error) {
//         console.error("Error redirecting to Stripe Checkout:", error);
//       }
//     } catch (error) {
//       console.error("Error during payment process:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Helmet title="Payment">
//       <CommonSection title="Payment" />
//       <section>
//         {/* <h1>Payment Page</h1> */}
//         <div className="payment-details">
//           <h2>Order Summary</h2>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
//               </li>
              
//             ))}
//             <li>Shippment Change = $30</li>
//           </ul>
//           <h3>Shipping Information</h3>
//           <p>Name: {shippingInfo.name}</p>
//           <p>Email: {shippingInfo.email}</p>
//           <p>Phone: {shippingInfo.phone}</p>
//           <p>Country: {shippingInfo.country}</p>
//           <p>City: {shippingInfo.city}</p>
//           <p>Postal Code: {shippingInfo.postalCode}</p>
//           <h3>Total Amount: ${totalAmount}</h3>
//         </div>
//         <button
//           onClick={handleCheckout}
//           disabled={loading}
//           className="btn btn-primary"
//         >
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//       </section>
//     </Helmet>
//   );
// };

// export default PaymentPage;










import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice"; // Import the actions

const stripePromise = loadStripe("pk_test_51PkTUPP5SChsMXQRSaFnZEguM0yCv7v4gFh39uIT31PRb9mzQ5rmMfJRWrSrjzoOXtHPSmmc3II0HOUGMmaUpkRh008JUwb0Bz");

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount > 0 ? cartTotalAmount + shippingCost : cartTotalAmount;
  const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};
  const userId = 11; // Replace this with the actual user ID from your auth system
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems.length) {
      navigate("/"); // Redirect to home if no items in the cart
    }
  }, [cartItems, navigate]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount}), // Convert to cents
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { id: sessionId } = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Error redirecting to Stripe Checkout:", error);
      } else {
        // Handle successful payment
        const orderData = {
          userId,
          dish_data: cartItems.map(item => ({
            dish_id: item.id,
            quantity: item.quantity
          })),
          quantity: cartItems.reduce((total, item) => total + item.quantity, 0),
          order_date: new Date().toISOString(), // Current date and time
          total_price: totalAmount,
          address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.country}, ${shippingInfo.postalCode}`,
          status: "Pending",
          payment_details: {
            method: "Credit Card",
            transaction_id: sessionId // Use the session ID as a placeholder for transaction ID
          }
        };

        await fetch("http://localhost:5001/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        // Clear the cart
        dispatch(cartActions.clearCart());

        navigate("/order-success");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Payment">
      <CommonSection title="Payment" />
      <section>
        {/* <h1>Payment Page</h1> */}
        <div className="payment-details">
          <h2>Order Summary</h2>
          <ul>
            {cartItems.map((item) => {
              const price = parseFloat(item.price); // Ensure price is a number
              return (
                <li key={item.id}>
                  {item.name} - {item.quantity} x ${price.toFixed(2)} = ${(item.quantity * price).toFixed(2)}
                </li>
              );
            })}
            <li>Shipping Charge: $30</li>
          </ul>
          <h3>Shipping Information</h3>
          <p>Name: {shippingInfo.name}</p>
          <p>Email: {shippingInfo.email}</p>
          <p>Phone: {shippingInfo.phone}</p>
          <p>Country: {shippingInfo.country}</p>
          <p>City: {shippingInfo.city}</p>
          <p>Postal Code: {shippingInfo.postalCode}</p>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </section>
    </Helmet>
  );
};

export default PaymentPage;






