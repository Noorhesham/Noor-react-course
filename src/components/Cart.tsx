import React from "react";
import { useCart } from "../context/CartProvider";
import FoodCard from "./FoodCard";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      {" "}
      {cart?.map((food) => (
        <FoodCard key={food.idMeal} food={food} />
      ))}
    </div>
  );
};

export default Cart;
