import React from "react";
export const NavLinkUser = (props) => {
  return (
    <div className="single-action-btn profile">
      <a href="">{props.svg}</a>
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
  );
};
