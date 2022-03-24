import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Homepage } from "./components/homepage/Homepage";
import { Products } from "./components/products/Products";

import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
