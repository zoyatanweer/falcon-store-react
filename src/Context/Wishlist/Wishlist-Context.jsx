import React, { createContext, useContext, useState } from "react";
import { Products } from "../../components";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const wishlistToggleHandler = (product) => {
    // console.log(product);
    // wishlist.findIndex((item) => item._id == product._id) !== -1
    //   ? setWishlist([...wishlist, product])
    //   : wishlist.filter((i) => i._id !== product._id);
    setWishlist((prevList) => {
      const index = prevList.findIndex((item) => item._id === product._id);
      return index === -1
        ? [...prevList, product]
        : prevList.filter((p) => p._id !== product._id);
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistToggleHandler }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
