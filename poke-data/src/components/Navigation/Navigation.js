import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ onClose }) {
  const closeMenu = () => {
    onClose();
  };

  return (
    <nav className="navbar">
      <button
        className="navbar__close-btn"
        type="button"
        onClick={() => closeMenu()}
      >
        X
      </button>
      <ul className="navbar__list">
        <li key="home" className="navbar__list-item">
          <Link className="navbar__link" to="/">
            <h1 className="navbar__home-link">PokeData</h1>
          </Link>
        </li>
        <li key="pokemon" className="navbar__list-item">
          <Link className="navbar__link" to="/cardContainer">
            <h2>Gym Leader Pokemon</h2>
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/">
            <h2>How to use the site</h2>
          </Link>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
