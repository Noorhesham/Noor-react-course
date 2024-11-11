import React from "react";
import { useCart } from "../context/CartProvider";

const FoodCard = ({ food }: { food: any }) => {
  const { setCart } = useCart();
  return (
    <div>
      <a href={`/food/${food.idMeal}`} className="flex rounded-2xl overflow-hidden flex-col items-start gap-2">
        <img src={food.strMealThumb} alt={food.strMeal} />
        <h2 className=" text-lg font-semibold text-gray-50">{food.strMeal}</h2>
      </a>
      <button onClick={() => setCart((oldCart) => [...oldCart, food])} className=" text-2xl text-orange-500">
        ADD TO CART
      </button>
    </div>
  );
};

export default FoodCard;
