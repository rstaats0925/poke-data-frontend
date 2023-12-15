import "./App.css";
import Main from "../Main/Main";
import CardContainer from "../CardContainer/CardContainer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/cardContainer">
          <CardContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
