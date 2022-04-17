import React from "react";
import { Link } from "react-router-dom";
const NavLinkItems = (props) => {
  return (
    <div className="single-action-btn">
      <Link to="./components/cart/cart.html">{props.svg}</Link>
    </div>
  );
};

export { NavLinkItems };
