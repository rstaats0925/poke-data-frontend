import "./Navigation.css";
// import { Link } from "react-router-dom";

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
      ></button>
      <ul className="navbar__main">
        <li key="home" className="navbar__item">
          <a className="navbar__link" href="#">
            Gyms
          </a>
        </li>
        <li key="pokemon" className="navbar__item">
          <a className="navbar__link" href="#">
            Pokemon
          </a>
        </li>
        <li key="about" className="navbar__item">
          <a className="navbar__link" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
