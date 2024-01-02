import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pokeData, setPokedata] = useState([]);

  useEffect(() => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonArray = [];
    for (let i = 152; i < 251; i++) {
      fetch(`${baseUrl}${i}`)
        .then((res) => {
          if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
          }
          return res.json();
        })
        .then((pokemon) => pokemonArray.push(pokemon))
        .catch((err) => {
          console.error(err);
        });
    }
    setPokedata(pokemonArray);
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/cardContainer">
          <CardContainer data={pokeData} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
