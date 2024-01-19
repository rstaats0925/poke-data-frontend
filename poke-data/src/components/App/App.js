import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import { gymLeaders } from "../../utils/constants";
import _ from "lodash";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let gymPokemon = [];
  gymLeaders.forEach(
    (gym) => (gymPokemon = gymPokemon.concat(_.uniq(gym.team)))
  );
  const [pokeData, setPokedata] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(data) {
    setModalIsOpen(true);
    setSelectedCard(data);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (!modalIsOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [modalIsOpen]);

  useEffect(() => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const promiseArray = [];
    let id = 1;
    gymPokemon.forEach((pokemon) => {
      promiseArray.push(
        fetch(`${baseUrl}${pokemon}`)
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
    });

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
      {modalIsOpen === true && <Modal data={selectedCard} />}
    </div>
  );
}

export default App;
