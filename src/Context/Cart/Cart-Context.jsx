import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [increaseQuantity, setIncreasedQuantity] = useState(1);
  const [decreaseQuantity, setDecreasedQuantity] = useState(1);

  const addToCartHandler = (product) => {
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

  const changeQuantityHandler = (product, quantity) => {
    setCart((prevList) =>
      prevList.map((p) => {
        return p._id === product._id
          ? { ...product, qty: p.qty + quantity }
          : p;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCartHandler,
        changeQuantityHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
