import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'><a className="Home">Home</a></Link>
      <Link to='/addrecipe'><a className="Recipe">Add Recipe</a></Link>
      <Link to='/profile'><a className="Profile">Profile</a></Link>
    </nav>
  );
};

export default Navbar;
