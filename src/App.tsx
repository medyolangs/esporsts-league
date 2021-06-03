import React from "react"

import TopBar from "./Components/Navbar/index"
import MainPage from "./Components/Home/index"
import EGames from "./Components/EGames/index"

import hrefs from "./Components/Config/config"
import Footer from "./Components/Footer"
import EStreams from "./Components/EStreams"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/egames" exact>
          <EGames />
        </Route>
        <Route path="/estreams" exact>
          <EStreams />
        </Route>
      </Switch>
      <Footer socmed={hrefs} />
    </Router>
  )
}

export default App
