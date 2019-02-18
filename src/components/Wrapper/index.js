import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="wrapper">{props.children}
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          {/* <span className="navbar-brand mb-0 h1 title"></span> */}
          <span className="navbar-brand mb-0 h1 guessResponse">Correct/Wrong</span>
          {/* <span className="navbar-brand mb-0 h1 score">Score: {this.state.score}</span> */}
        </nav>
        <div className="jumbotron jumbotron-fluid"></div>
        <div className="container">
          <h1 className="display-4">Welcome to Dimmsdale!</h1>
          <p className="lead">Click on a character to earn points. But don't click on a character more than once.</p>
        </div>
        <div className="card-container"></div>
      </div>
    </div>
  );
}

export default Wrapper;