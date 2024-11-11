import { useState } from "react";
import FoodCard from "./FoodCard";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../context/CartProvider";
const useGetFood = (query: string) => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      return data;
    },
    queryKey: [`foods-${query}`],
  });
  return { data, isLoading };
};
const Foods = () => {
  // const [foods, setFoods] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const { cart, setCart } = useCart();
  console.log(cart);
  const { data, isLoading } = useGetFood(query);
  // useEffect(() => {
  //   const getFoods = async () => {
  //     // setIsLoading(true);
  //     const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  //     const data = await res.json();
  //     setFoods(data.meals);
  //     // console.log(data);
  //     // setIsLoading(false);
  //   };
  //   getFoods();
  // }, [query]);
  console.log(data);
  return (
    <section>
      <input type="text" value={query} placeholder="Search for food" onChange={(e) => setQuery(e.target.value)} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="gap-5 grid grid-cols-3 lg:grid-cols-4">
          {data.meals?.map((food) => (
            <FoodCard key={food.idMeal} food={food} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Foods;
