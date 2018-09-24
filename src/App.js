import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/home";

const App = () => (
  <Router>
    <div> 
      <Navbar />
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  </Router>
);

export default App;
