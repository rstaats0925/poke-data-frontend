import "./CardContainer.css";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function CardContainer({
  data,
  errorOccurred,
  handleCardClick,
  isLoading,
}) {
  let pokemonCards = [];
  if (!errorOccurred) {
    pokemonCards = data.map((cardData) => {
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
  }

  return (
    <main className="main">
      <div className="main__wrapper">
        {isLoading && <Preloader />}
        {errorOccurred && <ErrorMessage />}
        <ul className="main__grid">{pokemonCards}</ul>
      </div>
    </main>
  );
}
