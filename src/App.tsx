import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Foods from "./components/Foods";
import FoodDetails from "./components/FoodDetails";
import { useState } from "react";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Foods />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
