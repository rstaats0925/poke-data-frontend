import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pokeData, setPokedata] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleCardClick() {
    setModalIsOpen(true);
  }

  useEffect(() => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const promiseArray = [];
    for (let i = 152; i < 161; i++) {
      promiseArray.push(
        fetch(`${baseUrl}${i}`)
          .then((res) => {
            if (!res.ok) {
              return Promise.reject(`Error: ${res.status}`);
            }
            return res.json();
          })
          .catch((err) => {
            console.error(err);
          })
      );
    }

    Promise.all(promiseArray).then((data) => {
      //set isLoaded to true
      setPokedata(data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/cardContainer">
          <CardContainer data={pokeData} handleCardClick={handleCardClick} />
        </Route>
      </Switch>
      <Footer />
      {modalIsOpen === true && <Modal />}
    </div>
  );
}

export default App;
