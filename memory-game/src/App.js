import React, { Component } from 'react';
import './App.css';
import Images from "./components/Game/Game.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Images />
      </div>
    );
  }
}

export default App;
