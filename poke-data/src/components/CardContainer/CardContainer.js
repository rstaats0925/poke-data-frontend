import "./CardContainer.css";
import Card from "../Card/Card";

export default function CardContainer({ data, handleCardClick }) {
  const pokemonCards = data.map((cardData) => {
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
