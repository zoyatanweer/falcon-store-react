import React from "react";
import "./Cart.css";
import { useWishlist, useCart } from "../index";
import { CartTotal } from "./CartTotal";
import { AddToWishlist, RatingIcon, ShareIcon } from "../../Assets/Svg/allsvg";

// cart section
const Cart = () => {
  const { cart, removeFromCartHandler, changeQuantityHandler } = useCart();
  return (
    <div className="display-cart-section">
      <div className="grid-3-column-layout-cart">
        {/* card 1 */}
        {cart.map((item) => {
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
            qty,
          } = item;
          const { wishlistToggleHandler } = useWishlist();

          return (
            <div className="card-horizontal" key={_id}>
              <div className="card-picture">
                <img
                  className="card-img img-horizontal"
                  src={imageSrc}
                  alt={name}
                />
                {hasOffer && <span className="card-badge">{badgeMessage}</span>}
                <span className="hide dismiss-btn">X</span>
                <div className="hide overlay">
                  {inStock ? "" : "out of stock"}
                </div>
              </div>

              <div className="card-about horizontal-about">
                <h1 className="title">{name}</h1>
                <h2 className="sub-title card-sub-title">{description} </h2>
                <p className="card-para card-horizontal-para">
                  <div className="card-hori-div1">
                    ₹{discountPrice}
                    {hasDiscount && (
                      <span className="striken-text"> ₹{originalPrice}</span>
                    )}
                    <br />
                    <span class="qty-product">
                      Qty:
                      <button
                        className={` btn qty-decrease ${
                          qty > 1 ? "" : "btn-disabled"
                        } `}
                        onClick={
                          qty > 1 ? () => changeQuantityHandler(item, -1) : null
                        }
                      >
                        -
                      </button>
                      {qty}
                      <button
                        className="btn qty-increase"
                        onClick={() => changeQuantityHandler(item, 1)}
                      >
                        +
                      </button>
                    </span>
                  </div>
                  <div className="card-hori-div2">
                    <span className="rated-star rating-horizontal">
                      {<RatingIcon className="rated rated-star rating-size" />}
                      {rating}
                    </span>
                  </div>
                </p>
                <div className="card-container-action">
                  <button
                    className="btn-cart font-size-cart"
                    onClick={() => removeFromCartHandler(item)}
                  >
                    <i className="fas fa-shopping-cart"></i>Remove from cart
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

      <div className="grid-1-column-layout">
        <CartTotal />
      </div>
    </div>
  );
};
export { Cart };
