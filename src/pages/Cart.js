import React from "react";
import axios from "axios";
import "../styles/cart.css";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  
  const initPayment = (data) => {
		const options = {
			key: "rzp_test_fYBmLVqHmRpeiu",
			amount: data.amount,
			currency: data.currency,
			name: 'Green Grocer',
			description: "Test Transaction",
			
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#008000",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8080/api/payment/orders";
			//const { data } = await axios.post(orderUrl, { amount: totalPrice });
      const amountInPaise = Math.round(totalPrice * 100); // Convert to integer in paise
    const { data } = await axios.post(orderUrl, { amount: amountInPaise });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};


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
         <button className="buy-button" onClick={handlePayment}>Buy Now</button> 
{/*         <button onClick={() => handlePayment(totalPrice)}> Buy NOW </button>
 */}
      </div>
    </div>
  );
};

export default Cart;



/* const handleOpenRazorpay=(data)=>{
  const options={
    key: 'rzp_test_fYBmLVqHmRpeiu',
    amount: Number(data.amount),
    currency: data.currency,
    order_id: data.id,
    name: 'SHOPPING APP',//    
    description: 'XYZ',//
    handler: function (response) {
      console.log(response, "34")
     
  }


  }
  const rzp = new window.Razorpay(options)
  rzp.open()
}

const handlePayment = (amount) => {
  const _data = { amount: amount }
  axios.post("http://localhost:8080/orders", _data)
      .then(res => {
          console.log(res.data, "29")
          handleOpenRazorpay(res.data.data)
      })
      .catch(err => {
          console.log(err)
      })
}
 */