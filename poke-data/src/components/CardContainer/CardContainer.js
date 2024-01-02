import "./CardContainer.css";
import React from "react";
import Card from "../Card/Card";

export default function CardContainer({ data }) {
  data.sort((a, b) => a.id - b.id);
  const pokemonCards = data.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Card
          className="card"
          name={pokemon.name}
          number={pokemon.id}
          sprites={pokemon.sprites}
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

//tasks
//make a GET request for Ho-Oh
//pass the data array to the correct component
//map through the data array & return an array of Card components
//put the Card array in an unordered list inside of the Main component
//use that data to create a Card component
//add the Card to the grid
