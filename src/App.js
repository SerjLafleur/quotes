import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import NavBar from './components/navbar/NavBar'
import HeroSection from './components/heroSection/HeroSection'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <HeroSection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
