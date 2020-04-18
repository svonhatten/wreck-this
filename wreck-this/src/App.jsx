import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import BubblePage from './WebPages/Bubble/Bubble';
import ExplosionPage from './WebPages/Explosion/Explosion';

export default function App() {
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
