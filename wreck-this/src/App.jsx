import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import logo from './logo.svg';
import './App.css';
import Home from './WebPages/Home/Home';
import BubblePage from './WebPages/Bubble/Bubble';
import ExplosionPage from './WebPages/Explosion/Explosion';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Bubble">
            <BubblePage />
          </Route>
          <Route path="/Explosion">
            <ExplosionPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function NoMatch() {
  return (
    <div>
      <h1>
        Oops! This pages doesn't exist!
      </h1>
      <h2>
       <li><Link to="/">Click this link to go back home!</Link> </li>
      </h2>
    </div>
  );
}