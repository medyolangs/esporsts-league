import React from "react"

import TopBar from "./Components/Navbar/index"
import MainPage from "./Components/Home/index"
import Footer from "./Components/Footer/index"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/categories"></Route>
        <Route path="/streams"></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
