import React, { useState } from "react";
import "./Navbar.css";

import { socialIcons, navItems } from "./../navbarComponent/NavbarComponent";
import { Logo } from "../navbarComponent/NavbarComponent";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const closeMenu = () => {
    setNavMenu(false);
  };

  window.addEventListener("scroll", closeMenu);

  const hamburger = (
    <a
      href="#"
      className="hamburger-container"
      onClick={() => setNavMenu(!navMenu)}
    >
      <div className={navMenu ? "close-hamburger" : "hamburger"}>
        <span className="ham-span"></span>
        <span className="ham-span"></span>
        <span className="ham-span"></span>
      </div>
    </a>
  );

  const dropDown = (
    <div className="show-nav-items">
      <div className="dropdown-close hamburger-container">{hamburger}</div>
      {navItems.map(({ name, id }) => (
        <Link to={id} className="nav-item" onClick={() => setNavMenu(false)}>
          {name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="navbar">
      <div className="nav-icon-container">
        {socialIcons.map((icon) => (
          <a className="nav-icon" href="#">
            {icon}
          </a>
        ))}
      </div>
      <div className="logo-container">{Logo}</div>
      {hamburger}
      {navMenu && dropDown}
    </div>
  );
};

export default Navbar;
