import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <nav className="navigation-container">
        <div className="nav-brand">Falcon Store</div>
            <li className="list-item list-non-bullet">
                <a className="link link-active" href="/index.html">HOME</a>
            </li>
            <li className="list-item list-non-bullet">
                <a className="link" href="./components/products/products.html">PRODUCTS</a>
            </li>
          <div className="right-nav">
            <div className="desktop-query">
                <img className="right-nav-img img-search" src="./components/assets/svg/search_black_24dp.svg" />
                <input className="desktop-searchbar" type="text" placeholder="Search for products" />
            </div>
            <div className="desktop-action-btn">
              <div className="single-action-btn profile">
                <a href="">
                  <svg className="right-nav-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                </a>
                <div className="profile-menu">
                    <li className="profile-dropdown">My Profile</li>
                    <li className="profile-dropdown">
                        <a href="./components/login/login.html">Login</a>
                    </li>
                    <li className="profile-dropdown">
                        <a href="./components/signup/signup.html">Signup</a>
                    </li>
                    <li className="profile-dropdown">Logout</li>
                </div>
              </div>
              <div className="single-action-btn">
                <a href="./components/wishlist/wishlist.html">
                  <svg className="right-nav-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                </a>
              </div>
              <div className="single-action-btn">
                <a href="./components/cart/cart.html">
                  <svg className="right-nav-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </a>
              </div>
            </div>
          </div>
    </nav>
    );
}
export {Header};