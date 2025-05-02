import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Typescript</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
