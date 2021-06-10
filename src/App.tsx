import React from "react";

import TopBar from "./Components/Navbar/index";
import MainPage from "./Components/Home/index";
import EGames from "./Components/EGames/index";

import { hrefs } from "./Components/Config/config";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MatchPage from "./Components/Home/Matches/MatchPage/MatchPage";
import { MatchContext } from "./Components/MatchContext/MatchContext";

const App: React.FC = () => {
  const [matchValue, setMatchValue] = React.useState<
    { matches: string; team1: string; team2: string; teamNames: string }[]
  >([]);

  return (
    <>
      <MatchContext.Provider value={{ matchValue, setMatchValue }}>
        <Router>
          <TopBar />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/egames" exact>
              <EGames />
            </Route>
            <Route path="/matches">
              <MatchPage />
            </Route>
          </Switch>
        </Router>
      </MatchContext.Provider>
      <Footer socmed={hrefs} />
    </>
  );
};

export default App;
