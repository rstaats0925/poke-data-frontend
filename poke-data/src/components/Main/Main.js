import "./Main.css";
import { React } from "react";
import GymCard from "../GymCard/GymCard";
import { gymLeaders } from "../../utils/constants";

function Main() {
  const gymCards = gymLeaders.map((cardData) => {
    return (
      <li key={cardData.number}>
        <GymCard gym={cardData} />
      </li>
    );
  });
  return (
    <main className="main">
      <div className="main__gyms-wrapper">
        <ul className="main__gyms-grid">{gymCards}</ul>
      </div>
    </main>
  );
}

export default Main;
