import "./CardContainer.css";
import React from "react";
import Card from "../Card/Card";

export default function CardContainer({ data }) {
  const pokemonCards = data.map((pokemon) => {
    return <Card sprites={pokemon.sprites} />;
  });

  return (
    <main className="grid">
      <ul>{pokemonCards}</ul>
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
