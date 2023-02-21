import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h3>
          Techie<span>Shop</span>
        </h3>
      </div>
      <nav className="navbar">
        <Link to="/">shop</Link>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
