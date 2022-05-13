import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <a className="Home">Home</a>
      </Link>
      <Link to="/addrecipe">
        <a className="Recipe">Add Recipe</a>
      </Link>
      <Link to="/profile">
        <a className="Profile">Profile</a>
      </Link>

      <Link to="/login">
        <div className="Login">Login</div>
      </Link>

      <div className="Ellipse1">
        <i className="Usericon"></i>
      </div>
    </div>
  );
};

export default Navbar;
