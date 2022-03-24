import React from "react";
import "./Header.css";
import { NavLinkItems, NavLinkUser, Homepage, Products } from "../index";
import { Link } from "react-router-dom";
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
        <Link className="link link-active" to="/">
          HOME
        </Link>
      </li>
      <li className="list-item list-non-bullet">
        <Link className="link" to="/products">
          PRODUCTS
        </Link>
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
          <Link to="/wishlist">
            <NavLinkItems svg={<AddToWishlist className="right-nav-img" />} />
          </Link>
          <Link to="/cart">
            <NavLinkItems
              svg={<ShoppingCartIcon className="right-nav-img" />}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export { Header };
