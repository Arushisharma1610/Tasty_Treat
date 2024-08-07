// import React from 'react'
// import "../styles/order.css"

// const order = () => {
//   return (
//     <div className='order'>
//     <h2>Order Successful</h2>
//     <button className='ordr-btn'>
//       Download Receipt
//     </button>

//     </div>
//   )
// }

// export default order

import React from 'react';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import "../styles/order.css";
import logo from "../assets/images/res-logo.png";

const Order = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};

  const logoBase64 = {logo}; // Replace with your logo's Base64 string
  const signatureBase64 = 'data:image/png;base64,...'; // Replace with your signature's Base64 string
  
  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Add content to the PDF
    doc.text('Order Successful', 10, 10);
    doc.text('----------------------', 10, 20);
  
    // Add order details to the PDF
    doc.text('Order Details:', 10, 30);
  
    cartItems.forEach((item, index) => {
      const price = parseFloat(item.price); // Convert to number if it's not already
      const itemTotal = (item.quantity * price).toFixed(2);
      const formattedPrice = price.toFixed(2);
  
      doc.text(`${item.name} - ${item.quantity} x $${formattedPrice} = $${itemTotal}`, 10, 40 + (index * 10));
    });
  
    doc.text(`Total Amount: $${cartTotalAmount.toFixed(2)}`, 10, 50 + (cartItems.length * 10));
  
    // Add shipping information to the PDF
    doc.text('Shipping Information:', 10, 60 + (cartItems.length * 10));
    doc.text(`Name: ${shippingInfo.name || 'N/A'}`, 10, 70 + (cartItems.length * 10));
    // doc.text(`Address: ${shippingInfo.address || 'N/A'}`, 10, 80 + (cartItems.length * 10));
    doc.text(`City: ${shippingInfo.city || 'N/A'}`, 10, 90 + (cartItems.length * 10));
    doc.text(`Country: ${shippingInfo.country || 'N/A'}`, 10, 100 + (cartItems.length * 10));
    doc.text(`Postal Code: ${shippingInfo.postalCode || 'N/A'}`, 10, 110 + (cartItems.length * 10));
  
    // Save the PDF
    doc.save('order_receipt.pdf');
  };
  

  return (
    <div className='order'>
      <h2>Order Successful</h2>
      <button className='ordr-btn' onClick={generatePDF}>
        Download Receipt
      </button>
    </div>
  );
}

export default Order;
