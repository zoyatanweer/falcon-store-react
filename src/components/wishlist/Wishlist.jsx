import React from "react";
import "./Wishlist.css";
import { WishlistData } from "./WishlistData";
import { AddToWishlist, RatingIcon, ShareIcon } from "../../Assets/Svg/allsvg";

const Wishlist = () => {
  return (
    <div class="wishlist-section">
      <div class="wishlist-title">
        WISHLIST
        <div class="wishlisted-total">Total items in wishlist - 4</div>
      </div>
      <div class="wishlist-products">
        {/* card1 */}
        {/* <div class="card-vertical" key={_id}>
          <div class="card-picture">
            <img
              class="card-img"
              src="../assets/images/download.jpg"
              alt="Marvel doodle tshirt"
            />
            <span class="hide card-badge">New Arrival</span>
            <span class="hide dismiss-btn">X</span>
            <div class="hide overlay">Out of stock</div>
          </div>

          <div class="card-about">
            <h1 class="title">Grey T-shirt</h1>
            <h2 class="sub-title card-sub-title">
              Casual grey colour t-shirt with marvel heroes doodle.
            </h2>
            <p class="card-para">
              ₹950
              <span class="striken-text">₹1500</span>
            </p>
            <div class="card-container-action">
              <button class="btn-cart">
                <i class="fas fa-shopping-cart"></i>Add to cart
              </button>
              <button class="heart-btn on-btn">
                <i class="far fa-heart"></i>
              </button>
              <button class="share-btn">
                <i class="fas fa-share-alt"></i>
              </button>
            </div>
          </div>
        </div> */}

        {/* card in react */}

        {WishlistData.map((item) => {
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
      </div>
    </div>
  );
};

export { Wishlist };
