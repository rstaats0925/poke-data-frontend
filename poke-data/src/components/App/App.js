import "./App.css";
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/cardContainer">
        <CardContainer />
      </Route>
    </div>
  );
}

export default App;
