import "./Main.css";
import { React } from "react";
import GymCard from "../GymCard/GymCard";
import { GYMS } from "../../utils/constants";

function Main() {
  const gymCards = GYMS.map((cardData) => {
    return (
      <li key={cardData.number}>
        <GymCard gym={cardData} />
      </li>
    );
  });
  return (
    <div className="main">
      <div className="main__gyms-wrapper">
        <ul className="main__gyms-grid">{gymCards}</ul>
      </div>
    </div>
  );
}

export default Main;
