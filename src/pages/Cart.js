import React, { useState } from 'react';
import '../styles/cart.css';

const Cart = () => {
  const [totalItems, setTotalItems] = useState(0);
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
