import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"; // Make sure to import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faMobile,
  faHome,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = ({ loggedIn, setLoggedIn }) => {
  const name = sessionStorage.getItem("name");
  const [username, setUsername] = useState(sessionStorage.getItem("username"));

  useEffect(() => {
    // Listen for changes to the username key in sessionStorage
    const handleStorageChange = (event) => {
      if (event.key === "username") {
        setUsername(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      {/* Top Header */}
      <marquee>
        <div className="width-100 top-header">
          <div className="container">
            <div className="width-50">
              <p className="head1p1 headquote">Green Grocers: Get it fresh! </p>
            </div>
            <div className="width-50">
              <ul className="head1ul cashback-sect">
                <li>
                  <FontAwesomeIcon icon={faUsers} className="fa-fade" />
                  <a className="head1mr" href="#">
                    Refer Your Friend And Earn Rs. 500 Cashback
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobile} className="fa-fade" />
                  <a href="#"> Download App</a>
                </li>
              </ul>
            </div>
          </div>
          <span className="navhead"></span>
        </div>
      </marquee>

      {/* Logo and Search Panel */}
      <div className="width-100 search-panel">
        <div className="container">
          <div className="width-20">
            <Link to="/">
              <img
                src="images/logo.png"
                alt="Your logo"
                style={{
                  position: "relative",
                  top: "-35px",
                  left: "-180px",
                  width: "220px",
                  height: "100px",
                }}
              />
            </Link>
          </div>
          {/* search section */}
          <form autoComplete="off">
            <div className="width-50">
              <input
                type="text"
                id="input"
                name="searchBox"
                placeholder="Search for exquisite fruits, vegetables and more"
              />
              <Link to="./Shopping">
                <button className="search-button">
                  <FontAwesomeIcon icon={faSearch} className="fa-fade" />
                </button>
              </Link>
            </div>
            <ul className="list"></ul>
          </form>
          <script src="Search.js"></script>
          <div className="width-30">
            <ul
              className="cart-sect"
              style={{ position: "relative", right: -160 }}
            >
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} />  Home
                </Link>
              </li>
              {loggedIn ? (
                <>
                  <li>
                    {" "}
                    <span>Welcome, {name}!</span>
                  </li>
                  <li>
                    <Link
                      to=""
                      onClick={() => {
                        sessionStorage.clear();
                        setUsername(null);
                        setLoggedIn(false);
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/Signin">
                      <FontAwesomeIcon icon={faUser} />  Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="lg"
                        className="fa-flip"
                      />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
