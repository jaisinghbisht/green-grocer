import React from "react";
import "../styles/cart.css";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-item cart-item-header">
          <p>Sr. No.</p>
          <p>Name of Vegetable</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Amount</p>
        </div>
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>{index + 1}</p>
            <p>{item.name}</p>
            <p>Rs {item.price}</p>
            <p>{item.quantity}</p>
            <p>Rs {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total-summary">
          <p>Total Items: {cartItems.length}</p>
          <p>Total Price: Rs {totalPrice}</p>
        </div>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
