import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import { gyms, gymPokemon } from "../../utils/constants";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import About from "../About/About";

function App() {
  const endPoints = useMemo(() => {
    return gyms.map((gym) => gym.team).flat();
  }, []);
  const [pokeData, setPokedata] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [navIsClosed, setNavIsClosed] = useState(true);
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleCardClick(data) {
    setModalIsOpen(true);
    setSelectedCard(data);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openNav() {
    setNavIsClosed(false);
  }

  function closeNav() {
    setNavIsClosed(true);
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
    setIsLoading(true);
    endPoints.forEach((r) => {
      promiseArray.push(
        fetch(`${baseUrl}${r}`)
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
      const completeData = data.map((element, index) => {
        return _.merge({}, element, gymPokemon[index]);
      });
      setPokedata(completeData);
      setIsLoading(false);
    });
  }, [endPoints]);

  return (
    <div className="App">
      <Header onClose={closeNav} onOpen={openNav} isClosed={navIsClosed} />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/gyms">
          <Main />
        </Route>
        <Route path="/cardContainer">
          <CardContainer
            data={pokeData}
            handleCardClick={handleCardClick}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
      <Footer />
      {modalIsOpen === true && (
        <Modal data={selectedCard} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
