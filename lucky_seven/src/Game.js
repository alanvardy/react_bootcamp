import React, { Component } from 'react';
import './Game.css';
import {randomNumber} from './lib'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { number: randomNumber() };
    this.newNumber = this.newNumber.bind(this);
  }

  newNumber() {
    this.setState({number: randomNumber()})
  }

  randomNumber
  render() {
    return (
      <div className="Game">
        <h1>Number is {this.state.number}</h1>
        {this.state.number !== 7 && <button onClick={this.newNumber}>Random Number</button>}
        {this.state.number === 7 && <h2>You Win!</h2>}
      </div>
    )
  }
}

export default Game;
