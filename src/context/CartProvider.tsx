import { useContext, createContext, useState, useEffect } from "react";
interface CartProps {
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
}
const CartContext = createContext<CartProps | undefined>(undefined);
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);
