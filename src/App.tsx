import React from 'react';

import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          rock paper scissors game
        </h1>
      </header>
      <main>
        <Choice />
        <Game />
      </main>
    </div>
  );
}

export default App;
