import React, { useState, useEffect } from 'react';
import "./Header.scss";
import logo from "../../assets/wtkd-logo.jpg";
import { Link } from "react-router-dom";

function Header() {


  const navLinks = [
    { name: "Home",
      path: "/",
    },
    { name: "About",
      path: "/about",
    },
    { name: "Events",
      path: "/events",
    },
    {
      name: "Merch",
      path: "/merch",
    },
    {
      name: "Resources",
      path: "/resources",
    },
  ];

  return (
    <>
      <header className="primary-header">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          {/* Desktop Navigation */}
          <ul className="nav-menu">
          {navLinks.map(link => (
            <li key = {link.name} className='nav-item'>
              <Link className='nav-link' to={link.path}>{link.name}</Link>
            </li>
          ))}
          </ul>
          {/* Mobile Menu Button */}
          <div className="menu-icon">
            <i className='fas fa-bars'/>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;