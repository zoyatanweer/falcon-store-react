import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Homepage } from "./components/homepage/Homepage";
import { Products } from "./components/products/Products";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Cart } from "./components/cart/Cart";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";

import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
