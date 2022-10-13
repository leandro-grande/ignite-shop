import { createContext, ReactNode, useContext, useState } from "react";
import { IProduct } from "../@types/Product";

type CartContextProps = {
  children: ReactNode;
}

type CartContextData = {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeToCart: (produtId: string) => void;
}

const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    const hasProductInCart = cart.some(item => item.id === product.id);

    if (hasProductInCart) {
      return
    }
    
    setCart((state) => [...state, product])
  }

  const removeToCart = (productId: string) => {
    setCart((state) => state.filter(item => item.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext);
}