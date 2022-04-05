import React, { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../Auth/UseAxios";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const {
    response: wishlistResponse,
    operation: fetchWishlist,
    loading: loadingWishlist,
  } = useAxios();

  useEffect(() => {
    if (wishlistResponse != undefined) {
      setWishlist(wishlistResponse.wishlist);
    }
  }, [wishlistResponse]);

  const wishlistToggleHandler = (product) => {
    const index = wishlist.findIndex((item) => item._id === product._id) === -1;
    index
      ? fetchWishlist({
          method: "post",
          url: "/api/user/wishlist",
          headers: {
            authorization: localStorage.getItem("token"),
          },
          data: {
            product: product,
          },
        })
      : fetchWishlist({
          method: "delete",
          url: `/api/user/wishlist/${product._id}`,
          headers: {
            authorization: localStorage.getItem("token"),
          },
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
