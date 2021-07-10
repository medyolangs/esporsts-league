import React from "react";

import TopBar from "./Components/Navbar/index";
import MainPage from "./Components/Home/index";
import EGames from "./Components/EGames/index";

import { hrefs } from "./config/href";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MatchPage from "./Components/Home/Matches/MatchPage/MatchPage";
import { Provider } from "react-redux";
import { store } from "./state/store/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
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
            <Footer socmed={hrefs} />
        </Provider>
    );
};

export default App;
