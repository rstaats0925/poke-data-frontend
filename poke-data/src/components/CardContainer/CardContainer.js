import "./CardContainer.css";
import Card from "../Card/Card";

export default function CardContainer({ data, handleCardClick }) {
  const pokemonCards = data.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Card
          className="card"
          name={pokemon.name}
          number={pokemon.id}
          sprites={pokemon.sprites}
          handleCardClick={handleCardClick}
        />
      </li>
    );
  });
  return (
    <main className="main">
      <div className="main__wrapper">
        <ul className="main__grid">{pokemonCards}</ul>
      </div>
    </main>
  );
}
