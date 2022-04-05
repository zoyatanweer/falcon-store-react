import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { makeServer } from "./server";

import { AuthProvider } from "./Context/Auth/Auth-Context";
import { ProductDataProvider } from "./Context/data/Data-Context";
import { WishlistProvider } from "./Context/Wishlist/Wishlist-Context";
import { CartProvider } from "./Context/Cart/Cart-Context";
// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductDataProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </ProductDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
