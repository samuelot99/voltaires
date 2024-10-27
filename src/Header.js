import React from 'react';
import './Header.css';
import logo from './voltaires1.png'; // Make sure you have a logo image in the src folder or adjust the path accordingly

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to Voltaires</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
