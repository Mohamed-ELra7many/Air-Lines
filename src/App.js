import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import { Switch, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Companies from './components/Companies/Companies'
import Details from './components/Details/Details'
import Darkmode from './components/Darkmode/Darkmode'
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Darkmode />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/compains">    {/*This is a download page for all companies */}
          <Companies />
        </Route>
        <Route exact path="/compains/:id">   {/*This is the download details page */}
          <Details />
        </Route>
      </Switch>
    </div>
  )
}

export default App
