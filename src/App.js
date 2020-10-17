import React from 'react';
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import ProductList from "./Components/ProductList"
import SecBanner from "./Components/Second_Banner"
import Comment from "./Components/Comment"
import GiveAway from "./Components/GiveAway"
import Footer from "./Components/Footer"

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductList />
      <SecBanner />
      <Comment />
      <GiveAway />
      <Footer />
    </div>
  );
}

export default App;
