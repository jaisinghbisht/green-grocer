import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./pages/About";
import Shopping from "./pages/Shopping";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true"
  );
  const [username, setUsername] = useState(
    sessionStorage.getItem("username") || ""
  );

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    sessionStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        username={username}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shopping"
          element={<Shopping setCartItems={setCartItems} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route
          path="/Signin"
          element={
            <Signin setLoggedIn={setLoggedIn} setUsername={setUsername} />
          }
        />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
