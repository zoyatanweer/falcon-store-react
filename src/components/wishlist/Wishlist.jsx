import React from "react";
import "./Wishlist.css";
import { useWishlist, useCart } from "../index";
import { AddToWishlist, RatingIcon, ShareIcon } from "../../Assets/Svg/allsvg";

const Wishlist = () => {
  const { wishlist, wishlistToggleHandler } = useWishlist();
  const { cartToggleHandler } = useCart();

  return (
    <div class="wishlist-section">
      <div class="wishlist-title">
        WISHLIST
        <div class="wishlisted-total">
          Total items in wishlist - {`${wishlist.length}`}
        </div>
      </div>
      <div class="wishlist-products">
        {/* card in react */}
        {wishlist.map((item) => {
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
                {hasOffer && <span className="card-badge">{badgeMessage}</span>}
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
                  <button
                    className="btn-cart"
                    onClick={() => cartToggleHandler(item)}
                  >
                    <i className="fas fa-shopping-cart"></i>Add to cart
                  </button>
                  <button
                    className="heart-btn"
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
      </div>
    </div>
  );
};

export { Wishlist };
