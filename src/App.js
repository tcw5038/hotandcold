import React, { Component } from 'react';
import './App.css';
import MainGame from './components/main-game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h1>Hot or Cold React Challenge</h1>
        <p>Guess a number between 1 and 100</p>
      <MainGame />
      </div>
    );
  }
}

export default App;
