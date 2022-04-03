import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { CategoriesIcon } from "../../Assets/Svg/allsvg";
import { FeaturedItems } from "../index";
import homeImage from "../../Assets/Images/homepage.png";
import tshirt from "../../Assets/Images/marvelDoodleTshirt.jpg";
import hoodies from "../../Assets/Images/infinityWarHoodie.jpg";
import keychains from "../../Assets/Images/ironManKeychain.jpg";
import mugs from "../../Assets/Images/lokiMug.jpg";

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
          <Link to="/products">
            <button className="btn btn-primary shop-btn">SHOP NOW</button>
          </Link>
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
