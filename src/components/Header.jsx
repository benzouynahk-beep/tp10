import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Shop-Ease</Link>
      </div>
      <div className="navbar-right">
        <Link to="/about" className="nav-link">À propos</Link>
        <Link to="/products" className="nav-link">Produits</Link>
        <Link to="/cart" className="nav-link">
          Panier <span className="badge">{cartItems.length}</span> 🛒
        </Link>
       <Link to="/logout" className="logout-link">Déconnexion</Link>
      </div>
    </nav>
  );
}

export default Header;