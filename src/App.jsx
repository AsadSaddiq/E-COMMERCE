import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetail from "./pages/Product/ProductDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
