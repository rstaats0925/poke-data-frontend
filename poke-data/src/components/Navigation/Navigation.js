import "./Navigation.css";
// import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <button className="navbar__close-btn" type="button"></button>
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
