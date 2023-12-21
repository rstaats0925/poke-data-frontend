import "./App.css";
//Components
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/cardContainer">
          <CardContainer />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
