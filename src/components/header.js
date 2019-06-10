import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="flexbox-container">
      <Link to="/" className="logo">
        <span></span>
      </Link>
    </div>
  </header>
);

export default Header;