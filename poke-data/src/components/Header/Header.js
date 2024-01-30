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
        className="header__menu-btn"
        type="button"
        onClick={() => openMobileMenu()}
      ></button>
    </header>
  );
}

export default Header;
