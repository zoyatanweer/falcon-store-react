import React from "react";
import "./Homepage.css";
import { CategoriesIcon } from "../../Assets/Svg/allsvg";
import { FeaturedItems } from "../index";
import homeImage from "../../Assets/Images/homepage.png";
import tshirt from "../../Assets/Images/homepage.png";
import hoodies from "../../Assets/Images/homepage.png";
import keychains from "../../Assets/Images/homepage.png";
import mugs from "../../Assets/Images/homepage.png";

// homepage
const Homepage = () => {
  return (
    <>
      <section className="homepage-content">
        <div className="homepage-header">
          <h1 className="homepage-title">END OF SEASON SALE</h1>
          <h2 className="homepage-desc">
            Upto <span className="homepage-span">50% off</span> on the products
          </h2>
          <a href="./components/products/products.html">
            <button className="btn btn-primary shop-btn">SHOP NOW</button>
          </a>
        </div>
        <img className="image-cover" src={homeImage} alt="homepage cover" />
      </section>

      {/* featured-categories  */}
      <section className="featured-categories">
        <h1 className="featured-title">
          <span>
            <CategoriesIcon className="featured-svg"></CategoriesIcon>
          </span>
          FEATURED CATEGORIES
        </h1>

        <div className="featured-product-type">
          <FeaturedItems src={tshirt} title="Tshirts" />
          <FeaturedItems src={hoodies} title="Hoodies" />
          <FeaturedItems src={keychains} title="Keychains" />
          <FeaturedItems src={mugs} title="Mugs" />
        </div>
      </section>
    </>
  );
};

export { Homepage };
