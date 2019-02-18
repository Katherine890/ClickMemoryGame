import React from "react";
import CartoonCard from "../CartoonCard";
import cartoons from "../../cartoons.json"
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    cartoons,
    score: 0
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 })
      this.baseState = this.state;
  }
   
  gameOver = () => {
    this.setState(this.baseState)
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
            handleIncrement={this.handleIncrement}
            gameOver={this.gameOver}
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