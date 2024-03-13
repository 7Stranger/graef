import React from "react";
import "./Navbar.scss";
import Logo from '../../assets/png/logo-color.png';
import {IoMenu} from 'react-icons/io5';
import {IoMdClose} from 'react-icons/io';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = function () {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="navbar">
      <nav className="navbar-container wrapper">
        <Link to="/" className="navbar-logo" onClick={()=> setShowNav(false)}>
          <img src={Logo} alt="logo"/>
        </Link>

        <ul className={`${showNav ? "show" : ""}`}>
          <li onClick={()=> setShowNav(false)}>
            <NavLink to="graef/products"><span>Products</span></NavLink>
          </li>
          <li onClick={()=> setShowNav(false)}>
            <NavLink to="graef/about"><span>About</span></NavLink>
          </li>
        </ul>

        <div className="navbar-menu" onClick={()=> setShowNav(!showNav)}>
          {showNav ? <IoMdClose/> : <IoMenu/>}
        </div>
      </nav>
    </header>
  )

}

export default Navbar;