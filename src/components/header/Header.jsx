import React from "react";
import "./Header.css";
import { NavLinkItems, NavLinkUser } from "../index";
import {
  SearchIcon,
  AddToWishlist,
  ShoppingCartIcon,
  UserIcon,
} from "../../Assets/Svg/allsvg";

const Header = () => {
  return (
    <nav className="navigation-container">
      <div className="nav-brand">Falcon Store</div>
      <li className="list-item list-non-bullet">
        <a className="link link-active" href="/index.html">
          HOME
        </a>
      </li>
      <li className="list-item list-non-bullet">
        <a className="link" href="./components/products/products.html">
          PRODUCTS
        </a>
      </li>
      <div className="right-nav">

        <div className="desktop-action-btn">
          <div className="desktop-query">
            <SearchIcon className="right-nav-img img-search"></SearchIcon>
            <input
              className="desktop-searchbar"
              type="text"
              placeholder="Search for products"
            />
          </div>
          <NavLinkUser svg={<UserIcon className="right-nav-img" />} />
          <NavLinkItems svg={<AddToWishlist className="right-nav-img" />} />
          <NavLinkItems svg={<ShoppingCartIcon className="right-nav-img" />} />

        </div>
      </div>
    </nav>
  );
};
export { Header };
