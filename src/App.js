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

class App extends Component {
  constructor(props){
  super (props)
  this.state={
    score:0,
    topScore:0
  }}
  updateScore = (score) => {
    this.setState({ score: score });
  }
  updateTopScore = (score, topScore) => {
    // console.log(score)
    // console.log(topScore)
    // console.log(score>topScore)
    if(score>topScore){
    this.setState({ topScore: score });
    }
  }
  componentDidUpdate() {
    console.log(this.state);
}

  render (){
    return (
      <Router>
        <div> 
          <Navbar score={this.state.score} topScore={this.state.topScore}/>
          <Header />
          {/* <Route exact path="/" component={Home} clickedFriend={this.score} clickedFriend={this.topScore}/> */}
          <Home updateScore={this.updateScore} updateTopScore={this.updateTopScore} score={this.state.score} topScore={this.state.topScore}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
