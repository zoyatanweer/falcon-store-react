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
import { FilterProvider } from "./Context/Filter-Context";
import { ThemeProvider } from "./Context/Theme/Theme-Context";
// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ProductDataProvider>
            <FilterProvider>
              <WishlistProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </WishlistProvider>
            </FilterProvider>
          </ProductDataProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
