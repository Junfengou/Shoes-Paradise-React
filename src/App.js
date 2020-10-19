import React from 'react';
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Default from "./Components/Default"
import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
