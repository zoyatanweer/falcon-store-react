import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const wishlistToggleHandler = (product) => {
    setWishlist((prevList) => {
      const index =
        prevList.findIndex((item) => item._id === product._id) === -1;
      return index
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
