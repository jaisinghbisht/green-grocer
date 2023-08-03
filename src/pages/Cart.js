import React, { useState } from 'react';
import '../styles/cart.css';

const Cart = () => {
  const [totalItems, setTotalItems] = useState(0);

  // Replace the following lines with your actual cart items data
  const cartItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    // Add more items here as needed
  ];

  return (
    <div>

      {/* CART CONTAINER */}
      <div id="cartMainContainer">
        <h1>Checkout</h1>
        <h3 id="totalItem">Total Items: {totalItems}</h3>
      </div>
    </div>
  );
};

export default Cart;
