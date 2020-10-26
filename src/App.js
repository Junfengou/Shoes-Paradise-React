import React from 'react';
import Navbar from "./Components/pages/Navbar"
import Main from "./Components/Main"
import Default from "./Components/error/Default"
import Footer from "./Components/pages/Footer"
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
      <Footer />
    </div>
  );
}

export default App;
