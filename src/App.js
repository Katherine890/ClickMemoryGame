import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import CartoonCard from "./components/CartoonCard";
import cartoons from "./cartoons.json";
import Score from "./components/Score";
import './App.css';

class App extends Component {
  //state = {
  // constructor(props) {
  //   super(props);
  //   this.state = {
    state = {
      cartoons,
      // score: 0
      //   newArray: []
    // }
  }
  //}

  // shuffleCartoon = cartoon => {

  //   const cartoons = this.state.cartoons.map(cartoon => cartoon);
  //   this.setState({ cartoons });
  // };

  render() {
    return (
      <Wrapper>
        <Title>Click Memory | Fairly Odd Parents</Title>
        <Score></Score>
      </Wrapper>
    );
  }
}

export default App;
