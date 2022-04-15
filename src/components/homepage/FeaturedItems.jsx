import React from "react";
import { useFilter } from "../../Context/Filter-Context";
import { useNavigate } from "react-router-dom";

const FeaturedItems = ({ src, title, categoryName }) => {
  const { FilterDispatch } = useFilter();
  const navigate = useNavigate();

  return (
    <div className="featured-type">
      <li className="list-item list-non-bullet">
        <img
          className="avatar-round avatar-xlg featured-img"
          src={src}
          alt={title}
          onClick={() => {
            FilterDispatch({
              type: "CATEGORIES",
              payload: categoryName,
            });
            navigate("/products");
          }}
        />
        <div className="featured-product-title">{title}</div>
      </li>
    </div>
  );
};
export { FeaturedItems };
