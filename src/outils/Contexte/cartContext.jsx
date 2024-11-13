
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.title === newItem.title);
      if (existingItem) {
        return prevCart.map(item => 
          item.title === newItem.title 
            ? { ...item, amount: item.amount + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...newItem, amount: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}
