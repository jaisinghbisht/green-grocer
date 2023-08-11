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
import "./components/Search.js";

function App() {
  // Initialize loggedIn state from sessionStorage
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true"
  );

  // Persist loggedIn state in sessionStorage
  useEffect(() => {
    sessionStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Signin" element={<Signin setLoggedIn={setLoggedIn} />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
