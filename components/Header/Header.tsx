// import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__name">Chu-long Lam</h1>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-button">
          Home
        </NavLink>
        <NavLink to="/projects" className="header__nav-button">
          Projects
        </NavLink>
        {/* <NavLink to="/experience" className="header__nav-button">
          Experience
        </NavLink> */}
        <NavLink to="/about" className="header__nav-button">
          About
        </NavLink>
        <NavLink to="/contact" className="header__nav-button">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
