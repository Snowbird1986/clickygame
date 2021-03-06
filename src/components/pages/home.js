import React, { Component } from "react";
import Title from "../../components/Title";
import friends from "../../friends.json";
import FriendCard from "../../components/FriendCard";
import Wrapper from "../../components/Wrapper";
import { shuffle } from "lodash";

class Home extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      friends,
      clicked:[],
      score:0,
      topScore:0,
    };
  
    // removeFriend = id => {
    //   // Filter this.state.friends for friends with an id not equal to the id being removed
    //   const friends = this.state.friends.filter(friend => friend.id !== id);
    //   // Set this.state.friends equal to the new friends array
    //   this.setState({ friends });
    // };

    // complonentDidMount() {
    //   window.location="/"
    // }
    componentDidUpdate() {
      console.log(this.state);
  }
  updateTopScore = (score, topScore) => {
    if(score>topScore){
    this.setState({ topScore: topScore });
    }
  }

    clickedFriend = name => {
        const clickedFriendName = name
        console.log(clickedFriendName)
        // console.log(this.state)
        console.log(this.state.clicked.indexOf(clickedFriendName))
        // console.log(clicked)
        if(this.state.clicked.indexOf(clickedFriendName)>-1) {
            this.setState({
                clicked: [],
                // score: 0,
            }
            
            // ,
            // window.location="/"
        );
        this.props.updateScore(0)

        // componentDidUpdate()
        }
        else{
          this.setState({
              clicked: [...this.state.clicked, clickedFriendName],
              // score: this.state.score+1,
          });
        // componentDidUpdate()
        // console.log(this.props.score)
        // this.updateTopScore(this.state.score,this.state.topScore)
        this.props.updateScore(this.props.score+1)
        this.props.updateTopScore(this.props.score+1,this.props.topScore)
        }
    }

    shuffleArray = friends => {
        let i = friends.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = friends[i];
          friends[i] = friends[j];
          friends[j] = temp;
        }
        return friends;
      }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      const shuffledFriends = this.shuffleArray(friends)
      return (
        <Wrapper>
        
          {shuffledFriends.map(friend => (
            <FriendCard
              clickedFriend={this.clickedFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      );
    }
  }
export default Home;