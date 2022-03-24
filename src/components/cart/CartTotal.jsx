import { CartData } from "./CartData";
import cartSection from "../../Assets/Images/cartSection.png";
import { useEffect, useState } from "react";

const CartTotal = () => {
  const [priceDetails, setPriceDetails] = useState({
    originalPrice: 0,
    discountPrice: 0,
  });
  const totalPrice =
    priceDetails.originalPrice - priceDetails.discountPrice + 10;

  useEffect(() => {
    setPriceDetails({
      originalPrice: CartData.reduce(
        (acc, item) => acc + item.originalPrice * item.quantity,
        0
      ),
      discountPrice: CartData.reduce(
        (acc, item) =>
          acc + (item.originalPrice - item.discountPrice) * item.quantity,
        0
      ),
    });
  }, [CartData]);

  return (
    <div className="cart-total-section">
      <div className="cart-total">
        <h1 className="cart-price-heading">
          PRICE DETAILS ({CartData.length} Items)
        </h1>
        <div className="total-cost">
          <div className="cart-total-title">Total MRP</div>
          <div className="total-cost-number">₹{priceDetails.originalPrice}</div>
        </div>
        <div className="discount">
          <div className="cart-total-title">Discount</div>
          <div className="total-discount-number">
            - ₹{priceDetails.discountPrice}
          </div>
        </div>

        {/* for future use */}
        {/* <div className="coupon">
                    <div className="cart-total-title">Coupon Discount</div>
                    <div className="total-coupon-number">- ₹{couponDiscount}</div>
                  </div> */}

        <div className="convenience-fee">
          <div className="cart-total-title">Convenience fee</div>
          <div className="total-convenience-number">+ ₹10</div>
        </div>

        <div className="filter-divider cart-divider"></div>

        <div className="total-amount">
          <div className="cart-total-title">Total Amount</div>
          <div className="total-amount-number">₹{totalPrice}</div>
        </div>
        <div className="place-order-btn">
          <button className="btn order-btn">PLACE ORDER</button>
        </div>
      </div>
      <div className="cart-right-img">
        <img className="cart-img" src={cartSection} />
      </div>
    </div>
  );
};
export { CartTotal };
