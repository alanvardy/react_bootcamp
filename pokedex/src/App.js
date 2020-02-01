import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Pokedex from './Pokedex'

class App extends Component {
  render() {
    return (
      <div className="App container" >
        <Pokedex />
      </div>
    )
  }
}

export default App;
