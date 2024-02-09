import "./Header.css";
import { React } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ onClose, onOpen, isClosed }) {
  const openMobileMenu = () => {
    onOpen();
  };

  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <h1 className="header__logo">Pokedata</h1>
      </Link>
      <Navigation onClose={onClose} isClosed={isClosed} />
      <button
        className="menu-btn"
        type="button"
        onClick={() => openMobileMenu()}
      >
        <div className="menu-btn__bar"></div>
        <div className="menu-btn__bar"></div>
        <div className="menu-btn__bar"></div>
      </button>
    </header>
  );
}

export default Header;
