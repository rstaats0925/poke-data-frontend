import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import { GYMS, GYMPOKEMON } from "../../utils/constants";
import { getPokemon } from "../../utils/api";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import About from "../About/About";

function App() {
  const endPoints = useMemo(() => {
    return GYMS.map((gym) => gym.team).flat();
  }, []);
  const [pokeData, setPokedata] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [navIsClosed, setNavIsClosed] = useState(true);
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErrorOccurred, setFetchErrorOccurred] = useState(false);

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
    const promiseArray = [];
    setIsLoading(true);

    endPoints.forEach((endpoint) => {
      promiseArray.push(
        getPokemon(endpoint).catch((err) => {
          setFetchErrorOccurred(true);
        })
      );
    });

    Promise.all(promiseArray)
      .then((data) => {
        const completeData = data.map((element, index) => {
          return _.merge({}, element, GYMPOKEMON[index]);
        });

        setPokedata(completeData);
        // setIsLoading(false);
      })
      .catch((err) => setFetchErrorOccurred(true))
      .finally(() => setIsLoading(false));
  }, [endPoints]);

  return (
    <div className="app">
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
            errorOccurred={fetchErrorOccurred}
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
