import "./CardContainer.css";
import Card from "../Card/Card";
import _ from "lodash";
import { gymPokemon } from "../../utils/constants";

export default function CardContainer({ data, handleCardClick }) {
  const completeData = data.map((element, index) => {
    return _.merge({}, element, gymPokemon[index]);
  });
  const pokemonCards = completeData.map((cardData) => {
    return (
      <li key={cardData.key}>
        <Card
          data={cardData}
          className="card"
          name={cardData.name}
          number={cardData.id}
          sprites={cardData.sprites}
          handleCardClick={handleCardClick}
        />
      </li>
    );
  });

  return (
    <div className="main">
      <div className="main__wrapper">
        <ul className="main__grid">{pokemonCards}</ul>
      </div>
    </div>
  );
}
