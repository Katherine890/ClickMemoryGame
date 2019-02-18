import React from "react";
import CartoonCard from "../CartoonCard";
import cartoons from "../../cartoons.json"
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    guessResponse: "",
    topScore: 0,
    cartoons,
    score: 0
  };

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

  handleClick = (id) => {
    let isCorrect = false;
    const searchArray = this.state.cartoons.map(cartoon => {
      if (id === cartoon.id) {
        if (cartoon.clicked === false) {
          cartoon.clicked = true;
          isCorrect = true;
          //Do stuff related to correct guess
        }
      }
      return cartoon;
    })
    if (isCorrect) {
      this.correctGuess(searchArray)
      console.log("correct guess");
    } else {
      this.incorrectGuess(searchArray)
      console.log("incorrect guess");
    }
  }

  correctGuess = (cartoonData) => {
    const { topScore, score,} = this.state
    this.setState({ score: score + 1, guessResponse: "Correct!", cartoons: this.shuffleArray(cartoonData) })
  }

  incorrectGuess = (cartoonData) => {
    let resetArray = cartoonData.map(cartoon => ({ ...cartoon, clicked: false }))
    // const {topScore, score} = this.state
    this.setState({ score: 0, guessResponse: "Incorrect!", cartoons: this.shuffleArray(resetArray) })
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="body">
        <div className="score-body">
          <span className="navbar-brand mb-0 h1 guessResponse">{this.state.guessResponse}</span>
          <p className="navbar-brand mb-0 h1 score">Score: {this.state.score}</p>
        </div>
        {this.state.cartoons.map(cartoon => (
          <CartoonCard
            score={this.state.score}
            handleClick={this.handleClick}
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