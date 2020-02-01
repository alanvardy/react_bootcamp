import React, { Component } from 'react';
import './Game.css';
import Die from './Die'
import { newDie, sleep } from './lib'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { rolling: false, first: newDie(), second: newDie() };
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        this.setState({ rolling: true })
        sleep(500).then(() => {
            this.setState({ rolling: false })
            this.setState({ first: newDie(), second: newDie() })
        })
    }


    new
    render() {
        return (
            <div className="Game columns is-centered">
                <div className="Game-dice column is-half has-text-centered">
                    <div className="has-text-centered">
                        <Die num={this.state.first} shake={this.state.rolling} />
                        <Die num={this.state.second} shake={this.state.rolling} />
                    </div>
                    {this.state.rolling || <button className="button is-primary" onClick={this.rollDice}>Roll Dice!</button>}
                    {this.state.rolling && <button className="button is-primary">Rolling...</button>}
                </div>
            </div>
        )
    }
}

export default Game;
