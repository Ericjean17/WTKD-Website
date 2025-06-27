import React, { useState, useEffect } from 'react';
import "./Header.scss";
import logo from "../../assets/wtkd-logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <nav className="navbar">
      <div className='navbar-container'>
        {/* Logo */}
        <div className="navbar-logo" style={isMobile ? { margin: '0 auto' } : {}}>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="nav-elements">
            <ul className={`nav-menu ${showNavbar && 'active'}`}>
            {navLinks.map(link => (
              <li key = {link.name} className='nav-item'>
                <Link className='nav-link' to={link.path}>{link.name}</Link>
              </li>
            ))}
            </ul>
          </div>
        )}
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="menu-icon" onClick={handleShowNavbar} style={{ position: 'absolute', top: 0, right: 0 }}>
            <i className='fas fa-bars'/>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;