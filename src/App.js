import React from "react";
import Home from "./components/Home";
import About from "./pages/About";
import Shopping from "./pages/Shopping";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
