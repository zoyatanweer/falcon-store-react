import { set } from "mongoose";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [increaseQuantity, setIncreasedQuantity] = useState(1);
  const [decreaseQuantity, setDecreasedQuantity] = useState(1);

  const cartToggleHandler = (product) => {
    setCart((prevList) => {
      const index = prevList.findIndex((item) => item._id === product._id);
      return index === -1
        ? [...prevList, { ...product, qty: 1 }]
        : [...prevList];
    });
  };

  const removeFromCartHandler = (product) => {
    setCart((prevList) => {
      const index = prevList.findIndex((item) => item._id === product._id);
      return index === -1
        ? [...prevList, product]
        : prevList.filter((p) => p._id !== product._id);
    });
  };

  const increaseQuantityHandler = (product) => {
    setCart((prevList) =>
      prevList.map((p) => {
        return p._id === product._id ? { ...product, qty: p.qty + 1 } : p;
      })
    );
  };

  const decreaseQuantityHandler = (product) => {
    setCart((prevList) =>
      prevList.map((p) => {
        return p._id === product._id ? { ...product, qty: p.qty - 1 } : p;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartToggleHandler,
        removeFromCartHandler,
        increaseQuantityHandler,
        decreaseQuantityHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
