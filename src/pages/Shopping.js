// import React, { useEffect } from "react";
import "../styles/shopping.css";
import VegetableItem from "./VegetableItem";

const Shopping = () => {
  //   useEffect(() => {
  //     loadContent("header.html", 1);
  //     loadContent("footer.html", 4);
  //   }, []);

  //   const loadContent = async (url, elementId) => {
  //     try {
  //       const response = await fetch(url);
  //       const content = await response.text();
  //       document.getElementById(elementId).innerHTML = content;
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };

  //   const toggleFilter = () => {
  //     const filterSection = document.querySelector(".filter-section");
  //     const filterToggleBtn = document.querySelector(".filter-toggle-btn");

  //     if (
  //       filterSection.style.display === "none" ||
  //       filterSection.style.display === ""
  //     ) {
  //       filterSection.style.display = "block";
  //       filterToggleBtn.innerHTML = "Hide Filters";
  //     } else {
  //       filterSection.style.display = "none";
  //       filterToggleBtn.innerHTML = "Show Filters";
  //     }
  //   };

  const items = [
    {
      image: "images/vegetables images/apple.jpeg",
      name: "Apple",
      price: "Rs 170/ KG",
    },
    {
      image: "images/vegetables images/bitter gourd.jpeg",
      name: "Bitter Gourd",
      price: "Rs 60/ KG",
    },
    {
      image: "images/vegetables images/brinjal.jpeg",
      name: "Brinjal",
      price: "Rs 40/ KG",
    },
    {
      image: "images/vegetables images/broccli.jpeg",
      name: "Broccoli",
      price: "Rs 50/ KG",
    },
    {
      image: "images/vegetables images/carrot.jpeg",
      name: "Carrot",
      price: "Rs 40/ KG",
    },
    {
      image: "images/vegetables images/cucumber.jpeg",
      name: "Cucumber",
      price: "Rs 25/ KG",
    },
    {
      image: "images/vegetables images/lady finger.jpeg",
      name: "Lady Finger",
      price: "Rs 40/ KG",
    },
    {
      image: "images/vegetables images/orange.jpeg",
      name: "Orange",
      price: "Rs 120/ KG",
    },
    {
      image: "images/vegetables images/potato.jpeg",
      name: "Potato",
      price: "Rs 20/ KG",
    },
    {
      image: "images/vegetables images/tomato.jpeg",
      name: "Tomato",
      price: "Rs 140/ KG",
    },
  ];

  return (
    <>
      {/* Header */}
      {/* <div id="1" /> */}

      {/* Left Section */}
      {/* <div className="filter-toggle">
        <button className="filter-toggle-btn" onClick={toggleFilter}>
          Filters
        </button>
      </div> */}
      {/* Filter Section */}
      {/* End of Filter Section */}

      {/* Main Section */}
      <section className="items">
        {items.map((item, index) => (
          <VegetableItem
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </section>
      {/* End of Main Section */}

      {/* Footer */}
      {/* <div id="4" /> */}
    </>
  );
};

export default Shopping;
