import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdRoundaboutRight } from "react-icons/md";
// import { FcAbout } from "react-icons/fc";
import { FaProductHunt } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logoSection">
        <img className="logo" src="/images/logo.svg" />
      </div>
      <div className="linkContainer">
        <NavLink className="navlink" to="/">
          <AiFillHome />
          <span>Home</span>
        </NavLink>
        <NavLink className="navlink" to="about">
          <MdRoundaboutRight />
          About
        </NavLink>
        <NavLink className="navlink" to="products">
          <FaProductHunt />
          Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
