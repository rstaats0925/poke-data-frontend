import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import { getPokemon } from "../../utils/api";

function App() {
  const [pokeData, setPokedata] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/250")
      .then((res) => res.json())
      .then((pokemon) => setPokedata(pokemon));
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
