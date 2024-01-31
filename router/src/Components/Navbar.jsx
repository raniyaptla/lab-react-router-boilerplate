import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'black', padding: '30px', color: 'white' }}>
      <Link to="/">Kalvium❤️</Link>
      <div style={{ float: 'right' }}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;