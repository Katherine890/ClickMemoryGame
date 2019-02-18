import React from "react";
import CartoonCard from "../CartoonCard";
import cartoons from "../../cartoons.json"
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    topScore: 0,
    cartoons,
    score: 0
  };

  // // handleIncrement increases this.state.score by 1
  // handleIncrement = () => {
  //     // We always use the setState method to update a component's state
  //     this.setState({ score: this.state.score + 1 })
  //     this.baseState = this.state;
  // }
   
  // gameOver = () => {
  //   this.setState(this.baseState)
  // }
  
  handleClick = (id) => {
    let isCorrect = false;
    const searchArray = this.state.cartoons.map(cartoon => {
      if(id === cartoon.id) {
        if(cartoon.clicked === false) {
          cartoon.clicked = true;
          isCorrect = true;
          //Do stuff related to correct guess
        } 
      }
      return cartoon;
    })
    if(isCorrect){
      this.correctGuess(searchArray)
      console.log("correct guess");
    } else {
      this.incorrectGuess(searchArray)
      console.log("incorrect guess");
    }
  }

  correctGuess = (cartoonData) => {
    const {topScore, score} = this.state
    this.setState({score: score + 1, cartoons: this.shuffleArray(cartoonData)})
  }

  incorrectGuess = (cartoonData) => {
    let resetArray = cartoonData.map(cartoon => ({...cartoon, clicked: false}))
   // const {topScore, score} = this.state
    this.setState({score: 0, cartoons: this.shuffleArray(resetArray)})
  }


  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="body">
        <div className="score-body">
          <p className="navbar-brand mb-0 h1 score">Score: {this.state.score}</p>
        </div>
        {this.state.cartoons.map(cartoon => (
          <CartoonCard
            score={this.state.score}
            handleClick={this.handleClick}
            // gameOver={this.gameOver}
            id={cartoon.id}
            key={cartoon.id}
            image={cartoon.image}
          />
        ))}
      </div>
    );
  }
}

export default Score;