import React from "react";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export const socialIcons = [<FaYoutube />, <FaGithub />, <FaTwitter />];

export const Logo = (
  <Link to="/" className="logo">
    Nitesh Singh
  </Link>
);

export const navItems = [
  {
    name: "Home",
    id: "/",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Porjects",
    id: "portfolio",
  },
  {
    name: "FAQ's",
    id: "faq",
  },
  {
    name: "Appointment",
    id: "appointment",
  },
];
