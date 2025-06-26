

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="logo">
          <img src="/images/logo.png" alt="Munamii Cakery logo" />
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              Products ▾
            </span>
            <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <li>
                <NavLink to="/products?category=cupcakes" 
                onClick={() => setDropdownOpen(false)}>Cupcakes</NavLink>
              </li>
              <li>
                <NavLink to="/products?category=weddingCakes" 
                onClick={() => setDropdownOpen(false)}>Wedding Cakes</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
