import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import { useCart } from "../context/CartProvider";
export const useGetFoodDetails = (id: string) => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      return data;
    },
    queryKey: [`food-details-${id}`],
  });

  return { data, isLoading };
};

const FoodDetails = () => {
  const { id } = useParams();
  const { cart, setCart } = useCart();
  const { data, isLoading } = useGetFoodDetails(id || "");
  console.log(cart);
  if (isLoading) return <p>Loading...</p>;
  if (!data.meals) return <p>not found</p>;
  const food = data.meals[0];
  return (
    <div className="grid grid-cols-2 gap-4">
      <FoodCard key={food.idMeal} food={food} />
      <p>{food.strInstructions}</p>
    </div>
  );
};

export default FoodDetails;
