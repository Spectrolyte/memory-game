import React, { Component } from 'react';
import './App.css';
import Images from "./components/Game/Game.js";

class App extends Component {

  render() {
    return (
      <div>
        <div className="App container">
          <h1>Pusheen Memory Game</h1>
          <p>Exercise your memory skills with Pusheen! Click on any gif to start earning points. 
            Continue to increase your score by selecting a gif you haven't already picked. Good luck meow~ !
          </p>
          <Images />
        </div>
      </div>
    );
  }
}

export default App;
