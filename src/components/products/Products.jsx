import React from "react";
import "./Products.css";
// import { Products } from "../../data/data";
import { PriceFilter, filters, Rating } from "./FilterSection";
import { AddToWishlist, RatingIcon, ShareIcon } from "../../Assets/Svg/allsvg";
import { useProduct } from "../../Context/data/Data-Context";

//  filter section
const Products = () => {
  const { data } = useProduct();
  return (
    <>
      <div className="display-flex-filter">
        <div className="grid-left-filter">
          <div className="filter-title">
            <h3 className="left-filter-title">FILTER</h3>
            <button className="btn right-clear-btn btn-underline">
              CLEAR ALL
            </button>
          </div>
          <ul className="filter-section">
            <div className="filter-divider"></div>
            <li className="filter-section-title">SORT</li>
            {PriceFilter.map((priceFilterItem) => {
              const { priceName, value } = priceFilterItem;
              return (
                <li className="list-item filter-item">
                  <label>
                    <input
                      className="filter-radio"
                      type="radio"
                      name="sort"
                      value={value}
                    />
                    {priceName}
                  </label>
                </li>
              );
            })}

            <div className="filter-divider"></div>

            <li className="filter-section-title">CATEGORIES</li>
            {filters.map((filterItem) => {
              const { filterName, value } = filterItem;
              return (
                <li className="list-item filter-item">
                  <label>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      name="category"
                      value={value}
                    />
                    {filterName}
                  </label>
                </li>
              );
            })}

            <div className="filter-divider"></div>

            <li className="filter-section-title">RATING</li>
            {Rating.map((ratingItem) => {
              const { ratingName, value } = ratingItem;
              return (
                <li className="list-item filter-item">
                  <label>
                    <input
                      className="filter-radio"
                      type="radio"
                      name="rating"
                      value={value}
                    />
                    {ratingName}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <!-- </div> --> */}

        {/* <!-- products --> */}
        <div className="grid-3-column-layout grid-right">
          {data.map((item) => {
            const {
              _id,
              name,
              description,
              originalPrice,
              hasOffer,
              hasDiscount,
              discountPrice,
              badgeMessage,
              imageSrc,
              inStock,
              fastDelivery,
              rating,
              categoryName,
            } = item;
            return (
              <div className="card-vertical" key={_id}>
                <div className="card-picture">
                  <img className="card-img" src={imageSrc} alt={name} />
                  {hasOffer && (
                    <span className="card-badge">{badgeMessage}</span>
                  )}
                  <span className="hide dismiss-btn">X</span>
                  <span className="card-rating rated-star">
                    {<RatingIcon className="rated rated-star rating-size" />}
                    {rating}
                  </span>
                  <div className="hide overlay">
                    {inStock ? "" : "out of stock"}
                  </div>
                </div>

                <div className="card-about">
                  <h1 className="title">{name}</h1>
                  <h2 className="sub-title card-sub-title">{description} </h2>
                  <p className="card-para">
                    ₹{discountPrice}
                    {hasDiscount && (
                      <span className="striken-text"> ₹{originalPrice}</span>
                    )}
                  </p>
                  <div className="card-container-action">
                    <button className="btn-cart">
                      <i className="fas fa-shopping-cart"></i>Add to cart
                    </button>
                    <button className="heart-btn">
                      {<AddToWishlist className="far fa-heart" />}
                    </button>
                    <button className="share-btn">{<ShareIcon />}</button>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <!-- grid --> */}
        </div>
        {/* <!-- flex-filter --> */}
      </div>
    </>
  );
};

export { Products };
