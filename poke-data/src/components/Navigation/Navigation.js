import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ onClose, isClosed }) {
  const closeNav = () => {
    onClose();
  };

  return (
    <nav className={`${isClosed ? "navbar navbar_closed" : "navbar"}`}>
      <button
        className="navbar__close-btn"
        type="button"
        onClick={() => closeNav()}
      >
        X
      </button>
      <ul className="navbar__main">
        <li key="home" className="navbar__item">
          <Link className="navbar__link" to="/gyms" onClick={() => closeNav()}>
            Gyms
          </Link>
        </li>
        <li key="pokemon" className="navbar__item">
          <Link
            className="navbar__link"
            to="/cardContainer"
            onClick={() => closeNav()}
          >
            Pokemon
          </Link>
        </li>
        <li key="about" className="navbar__item">
          <Link className="navbar__link" to="/" onClick={() => closeNav()}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
