// Checkout.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount > 0 ? cartTotalAmount + shippingCost : cartTotalAmount;

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };


    // Store shipping info in localStorage or send it directly to payment page
    localStorage.setItem('shippingInfo', JSON.stringify(userShippingAddress));

    navigate("/payment"); // Redirect to payment page
  };

   return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                {cartTotalAmount > 0 && (
                  <>
                    <h6 className="d-flex align-items-center justify-content-between mb-3">
                      Shipping: <span>${shippingCost}</span>
                    </h6>
                    <div className="checkout__total">
                      <h5 className="d-flex align-items-center justify-content-between">
                        Total: <span>${totalAmount}</span>
                      </h5>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>


  );
};

export default Checkout;









// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import Helmet from "../components/Helmet/Helmet";
// import "../styles/checkout.css";

// const Checkout = () => {
//   const [enterName, setEnterName] = useState("");
//   const [enterEmail, setEnterEmail] = useState("");
//   const [enterNumber, setEnterNumber] = useState("");
//   const [enterCountry, setEnterCountry] = useState("");
//   const [enterCity, setEnterCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [loading, setLoading] = useState(false); // Track loading state

//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
//   const shippingCost = 30;
//   const totalAmount = cartTotalAmount > 0 ? cartTotalAmount + shippingCost : cartTotalAmount;

//   const userId = useSelector((state) => state.userId); // Fetch user ID from Redux state
//   const token = useSelector((state) => state.token);

//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
  
//     const userShippingAddress = {
//       name: enterName,
//       email: enterEmail,
//       phone: enterNumber,
//       country: enterCountry,
//       city: enterCity,
//       postalCode: postalCode,
//     };
  
//     const orderDetails = {
//       userId: userId, // Ensure userID is correctly fetched
//       dish_data: cartItems, // Ensure cartItems is correctly fetched
//       quantity: cartItems.length,
//       total_price: totalAmount,
//       address: userShippingAddress,
//       payment_details: {
//         method: "Credit Card", // Adjust as needed
//         transaction_id: "transaction-id", // Adjust as needed
//       },
//     };
  
//     setLoading(true); // Start loading
  
//     try {
//       const response = await fetch("http://localhost:5001/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`, // Ensure token is correctly fetched
//         },
//         body: JSON.stringify(orderDetails),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to create order");
//       }
  
//       const result = await response.json();
//       console.log("Order created successfully:", result);
  
//       // Store shipping info in localStorage and redirect to payment page
//       localStorage.setItem('shippingInfo', JSON.stringify(userShippingAddress));
//       navigate("/payment");
//     } catch (error) {
//       console.error("Error creating order:", error);
//       // Display an error message to the user
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <Helmet title="Checkout">
//       <CommonSection title="Checkout" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="8" md="6">
//               <h6 className="mb-4">Shipping Address</h6>
//               <form className="checkout__form" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     required
//                     onChange={(e) => setEnterName(e.target.value)}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     required
//                     onChange={(e) => setEnterEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="number"
//                     placeholder="Phone number"
//                     required
//                     onChange={(e) => setEnterNumber(e.target.value)}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Country"
//                     required
//                     onChange={(e) => setEnterCountry(e.target.value)}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="City"
//                     required
//                     onChange={(e) => setEnterCity(e.target.value)}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="number"
//                     placeholder="Postal code"
//                     required
//                     onChange={(e) => setPostalCode(e.target.value)}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn" disabled={loading}>
//                   {loading ? "Processing..." : "Payment"}
//                 </button>
//               </form>
//             </Col>
//             <Col lg="4" md="6">
//               <div className="checkout__bill">
//                 <h6 className="d-flex align-items-center justify-content-between mb-3">
//                   Subtotal: <span>${cartTotalAmount}</span>
//                 </h6>
//                 {cartTotalAmount > 0 && (
//                   <>
//                     <h6 className="d-flex align-items-center justify-content-between mb-3">
//                       Shipping: <span>${shippingCost}</span>
//                     </h6>
//                     <div className="checkout__total">
//                       <h5 className="d-flex align-items-center justify-content-between">
//                         Total: <span>${totalAmount}</span>
//                       </h5>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Checkout;







