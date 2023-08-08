import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/citysearch.css";

const VegetableItem = ({ image, name, price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="item-details">
        <h3>{name}</h3>
        <p className="price">Rs {price}/ KG</p>
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

function CitySearch() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVegetables, setSelectedVegetables] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cities")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const handleSearch = () => {
    if (!selectedCity) {
      setSelectedVegetables([]);
      return;
    }

    axios
      .get(`http://localhost:8080/api/city/${selectedCity}`)
      .then((response) => {
        setSelectedVegetables(response.data.vegetables);
      })
      .catch((error) => {
        console.error("Error fetching vegetables:", error);
        setSelectedVegetables([]);
      });
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <label htmlFor="cityInput"></label>
      <select id="cityInput" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city._id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <button className="main-btn" onClick={handleSearch}>
        Search
      </button>
      <br />
      <br />
      <br />
      <div className="vegetable-list">
        {selectedVegetables.map((vegetable) => (
          <VegetableItem
            key={vegetable.name}
            image={`images/vegetables/${vegetable.name.toLowerCase()}.jpeg`}
            name={vegetable.name}
            price={vegetable.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CitySearch;
