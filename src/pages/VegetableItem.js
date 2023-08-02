import React from "react";

const VegetableItem = ({ image, name, price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="item-details">
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <label htmlFor={`quantity_${name}`}>Quantity:</label>
        <select id={`quantity_${name}`}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default VegetableItem;
