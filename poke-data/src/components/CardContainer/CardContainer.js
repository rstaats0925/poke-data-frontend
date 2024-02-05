import "./CardContainer.css";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";

export default function CardContainer({ data, handleCardClick, isLoading }) {
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
        {isLoading && <Preloader />}
        <ul className="main__grid">{pokemonCards}</ul>
      </div>
    </div>
  );
}
