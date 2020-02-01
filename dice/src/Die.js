import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

    render() {
        return (
            <div className={"Die fas fa-dice-" + this.props.num + " has-text-primary" + (this.props.shake ? ' shaking' : '')}>
            </div>
        )
    }
}

export default Die;
