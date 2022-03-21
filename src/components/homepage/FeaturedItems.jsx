import React from "react";

const FeaturedItems = ({ src, title }) => {
  return (
    <div className="featured-type">
      <li className="list-item list-non-bullet">
        <a href="./components/products/products.html">
          <img
            className="avatar-round avatar-xlg featured-img"
            src={src}
            alt={title}
          />
          <div className="featured-product-title">{title}</div>
        </a>
      </li>
    </div>
  );
};
export { FeaturedItems };
