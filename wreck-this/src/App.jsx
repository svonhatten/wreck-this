import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
//import './App.css';
import BubblePage from './WebPages/Bubble/Bubble';
import ExplosionPage from './WebPages/Explosion/Explosion';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Bubble">
            <BubblePage />
          </Route>
          <Route path="/Explosion">
            <ExplosionPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Bubble() {
  return (
    <div>
      <h2>Bubble</h2>
    </div>
  );
}

function Explosion() {
  return (
    <div>
      <h2>Explosion</h2>
    </div>
  );
}
