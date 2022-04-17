import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Products.css";
import { useCart, useWishlist } from "../index";
import { useFilter } from "../../Context/Filter-Context";
import { Filter } from "./Filter";
import { AddToWishlist, RatingIcon, ShareIcon } from "../../Assets/Svg/allsvg";
import { useProduct } from "../../Context/data/Data-Context";
import { useTheme } from "../../Context/Theme/Theme-Context";

//  filter section
const Products = () => {
  const { theme } = useTheme();
  const { data } = useProduct();
  const { FilterState, FilterDispatch } = useFilter();
  const { wishlistToggleHandler, wishlist } = useWishlist();
  const { addToCartHandler, cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    FilterState.dataToShow.length === 0 &&
      FilterDispatch({
        type: "SET_DATA",
        payload: data,
      });
  }, [data]);

  const categoryFilter = (dataToShow, filterByCategories) => {
    if (filterByCategories.length > 0) {
      return dataToShow.filter((product) => {
        return filterByCategories.includes(product.categoryName);
      });
    } else {
      return dataToShow;
    }
  };

  const priceFilter = (dataToShow, filterByPrice) => {
    if (filterByPrice === "PRICE_LOW_TO_HIGH") {
      return dataToShow.sort(
        (product1, product2) => product1.discountPrice - product2.discountPrice
      );
    } else if (filterByPrice === "PRICE_HIGH_TO_LOW") {
      return dataToShow.sort(
        (product1, product2) => product2.discountPrice - product1.discountPrice
      );
    } else {
      return dataToShow;
    }
  };

  const priceRangeFilter = (dataToShow, filterByPriceRange) => {
    if (filterByPriceRange !== null) {
      return dataToShow.filter(
        (product) => product.discountPrice <= filterByPriceRange
      );
    } else {
      return dataToShow;
    }
  };

  const ratingFilter = (dataToShow, filterByRating) => {
    if (filterByRating != null) {
      return dataToShow.filter((product) => product.ratings >= filterByRating);
    } else {
      return dataToShow;
    }
  };

  const outOfStockFilter = (dataToShow, filterByStock) => {
    if (filterByStock === false) {
      return dataToShow.filter((product) => product.inStock);
    } else {
      return dataToShow;
    }
  };

  const filteredProducts = (filterState) => {
    const sortByCategoryData = categoryFilter(
      filterState.dataToShow,
      filterState.categoryName
    );

    const sortByPriceData = priceFilter(
      sortByCategoryData,
      FilterState.sortByPrice
    );

    const sortByStockData = outOfStockFilter(
      sortByPriceData,
      FilterState.includeOutOfStock
    );
    const sortByRatingData = ratingFilter(sortByStockData, FilterState.ratings);

    const sortByPriceRangeData = priceRangeFilter(
      sortByRatingData,
      FilterState.priceRange
    );
    return sortByPriceRangeData;
  };

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <div className="display-flex-filter">
        <Filter />

        {/* <!-- products --> */}
        <div className="grid-3-column-layout grid-right">
          {filteredProducts(FilterState).length > 0 &&
            filteredProducts(FilterState).map((item) => {
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
                ratings,
                categoryName,
              } = item;

              const isInCart =
                cart.findIndex((i) => i._id === item._id) === -1 ? false : true;
              const isInWishlist =
                wishlist.findIndex((i) => i._id === item._id) === -1
                  ? false
                  : true;

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
                      {ratings}
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
                      <span class="discount-percent">
                        {`${(
                          ((originalPrice - discountPrice) / originalPrice) *
                          100
                        ).toFixed()}% OFF
                      `}
                      </span>
                    </p>
                    <div className="card-container-action">
                      <button
                        className="btn-cart"
                        onClick={
                          isInCart
                            ? () => navigate("/cart")
                            : () => {
                                addToCartHandler(item);
                              }
                        }
                      >
                        <i className="fas fa-shopping-cart"></i>
                        {isInCart ? "Go to cart" : "Add to cart"}
                      </button>

                      <button
                        className={` heart-btn ${
                          isInWishlist ? "heart-btn on-btn" : "heart-btn"
                        }`}
                        onClick={() => wishlistToggleHandler(item)}
                      >
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
    </div>
  );
};

export { Products };
