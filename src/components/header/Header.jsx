import React from "react";
import "./Header.css";
import { NavLinkItems, NavLinkUser, Homepage, Products } from "../index";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  SearchIcon,
  AddToWishlist,
  ShoppingCartIcon,
  UserIcon,
  LightThemeIcon,
  DarkThemeIcon,
} from "../../Assets/Svg/allsvg";
import { useWishlist } from "../../Context/Wishlist/Wishlist-Context";
import { useCart } from "../../Context/Cart/Cart-Context";
import { CartProvider } from "../../Context/Cart/Cart-Context";
import { ThemeProvider, useTheme } from "../../Context/Theme/Theme-Context";

const Header = () => {
  const { wishlist } = useWishlist();
  const { cart, initialValue } = useCart();
  const { theme, toggleTheme } = useTheme();
  const navLinkClass = ({ isActive }) =>
    `link ${isActive ? "link-active" : ""}`;

  return (
    <nav
      className={`navigation-container  ${
        theme === "dark" ? "dark-theme" : "light-theme"
      } `}
    >
      <div className="nav-brand title-theme">
        <Link to="/">Falcon Store</Link>
      </div>
      <li className="list-item list-non-bullet">
        <NavLink className={navLinkClass} to="/">
          HOME
        </NavLink>
      </li>
      <li className="list-item list-non-bullet">
        <NavLink className={navLinkClass} to="/products">
          PRODUCTS
        </NavLink>
      </li>
      <div className="right-nav">
        <div className="desktop-query">
          <SearchIcon className="right-nav-img img-search"></SearchIcon>
          <input
            className="desktop-searchbar"
            type="text"
            placeholder="Search for products"
          />
        </div>
        <div className="desktop-action-btn">
          <div className="single-action-btn" onClick={toggleTheme}>
            {theme === "dark" ? (
              <DarkThemeIcon className="right-nav-img" />
            ) : (
              <LightThemeIcon className="right-nav-img" />
            )}
          </div>

          <div className="single-action-btn">
            <Link to="/wishlist">
              <NavLinkItems svg={<AddToWishlist className="right-nav-img" />} />

              <button className="btn-icon btn-icon-wishlist">
                {wishlist.length}
              </button>
            </Link>
          </div>

          <div className="single-action-btn">
            <Link to="/cart">
              <NavLinkItems
                // className="single-action-btn"
                svg={<ShoppingCartIcon className="right-nav-img" />}
              />
              <button className="btn-icon btn-icon-cart">
                {cart.reduce((acc, curr) => acc + curr.qty, 0)}
              </button>
            </Link>
          </div>
          <NavLinkUser
            className="profile-menu"
            svg={<UserIcon className="right-nav-img" />}
          />

          {/* <div className="single-action-btn"> */}
          {/* <Link to="/logout">
            <NavLinkItems svg={<LogoutIcon className="right-nav-img" />} />
          </Link> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};
export { Header };
