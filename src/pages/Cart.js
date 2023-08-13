import React from "react";
import "../styles/cart.css";

const Cart = ({ cartItems }) => {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div id="cartMainContainer">
        <h1>Checkout</h1>
        <h3 id="totalItem">Total Items: {totalItems}</h3>
        <h3 id="totalPrice">Total Price: Rs {totalPrice}</h3>
      </div>
      <div id="cartItemsContainer">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>{item.name}</p>
            <p>Price: Rs {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <button id="buyButton">Buy Now</button>
    </div>
  );
};

export default Cart;
