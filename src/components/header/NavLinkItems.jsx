import React from "react";
const NavLinkItems = (props) => {
  return (
    <div className="single-action-btn">
      <a href="./components/cart/cart.html">{props.svg}</a>
    </div>
  );
};

export { NavLinkItems };