import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card tile is-3 is-child">
                <div className="Card-inner">
                    <span className="Card-title">
                        {this.props.name}
                    </span>
                    <div className="image">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt="" />
                    </div>
                    <p>Type: {this.props.type}</p>
                    <p>EXP: {this.props.base_experience}</p>
                </div>
            </div>
        )
    }
}

export default Card;
