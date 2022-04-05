import React, { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../Auth/UseAxios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [increaseQuantity, setIncreasedQuantity] = useState(1);
  const [decreaseQuantity, setDecreasedQuantity] = useState(1);
  const {
    response: cartResponse,
    operation: fetchCart,
    loading: loadingCart,
  } = useAxios();

  useEffect(() => {
    if (cartResponse != undefined) {
      setCart(cartResponse.cart);
      console.log(cartResponse);
    }
  }, [cartResponse]);

  const addToCartHandler = (product) => {
    cart.findIndex((item) => item._id === product._id) === -1 &&
      fetchCart({
        method: "post",
        url: "/api/user/cart",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: {
          product: product,
        },
      });
  };

  const removeFromCartHandler = (product) => {
    !!cart.findIndex((item) => item._id === product._id) === -1 &&
      fetchCart({
        method: "delete",
        url: `/api/user/cart/${product.productId}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: {
          product: product,
        },
      });
  };

  const changeQuantityHandler = (product, quantity) => {
    console.log(cartResponse);
    fetchCart({
      method: "post",
      url: `/api/user/cart/${product.productId}`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
      data: {
        action: {
          type: quantity > 0 ? "increment" : "decrement",
        },
      },
    });
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
