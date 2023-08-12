import React from "react";
import "../styles/cart.css";

const Cart = ({ cartItems }) => {
  console.log("Cart items:", cartItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <div id="cartMainContainer">
        <h1>Checkout</h1>
        <h3 id="totalItem">Total Items: {totalItems}</h3>
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
    </div>
  );
};

export default Cart;
