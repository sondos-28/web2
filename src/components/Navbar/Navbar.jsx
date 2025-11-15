import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa'; 
import Switch from '../ThemeSwitch/Switch.jsx'; 
import LoginButton from '../LoginButton/LoginButton.jsx';

const Navbar = () => {
  // Theme logic
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); 

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Mobile menu logic
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Dropdown logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <FaLaptopCode /> Web2
        </Link>

        {/* Menu */}
        <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              الرئيسية
            </Link>
          </li>
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-links">
              الكورسات <i className="fas fa-caret-down" />
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/courses/html" className="dropdown-link" onClick={closeMobileMenu}>HTML</Link></li>
                <li><Link to="/courses/css" className="dropdown-link" onClick={closeMobileMenu}>CSS</Link></li>
                <li><Link to="/courses/js" className="dropdown-link" onClick={closeMobileMenu}>JavaScript</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              من نحن
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              تواصل معنا
            </Link>
          </li>

          {/* Login button for mobile */}
          <li className="nav-item-mobile" onClick={closeMobileMenu}>
            <LoginButton />
          </li>
        </ul>

        {/* Controls */}
        <div className="nav-controls">
          
          {/* Login button desktop */}
          <div className="user-profile">
            <LoginButton />
          </div>
          
          <Switch theme={theme} onToggle={handleThemeToggle} />
          
          <div className="mobile-icon" onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
