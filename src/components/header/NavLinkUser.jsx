import React from "react";
import { Link } from "react-router-dom";
export const NavLinkUser = (props) => {
  return (
    <div className="single-action-btn profile">
      <a href="">{props.svg}</a>
      <div className="profile-menu">
        <li className="profile-dropdown">My Profile</li>
        <li className="profile-dropdown">
          <Link to="/login">Login</Link>
        </li>
        <li className="profile-dropdown">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="profile-dropdown">
          <Link to="/logout">Logout</Link>
        </li>
      </div>
    </div>
  );
};
