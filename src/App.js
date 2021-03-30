import './App.css';
import Header from './components/Header.js';
import Game from './components/Game.js';
import React, {useState} from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(1);
  const [highScore, setHighScore] = useState(0);

  const setCurrentScoreCallback = (score) => {
    setCurrentScore(score);
    console.log(`Current Score Callback`);
    
  }
  const updateHighScore = (score) => {
    console.log(`High Score: ${highScore}`);
    if (score > highScore) {
      setHighScore(score);
    }
  }

  return (
    <div className="App">
      <Header 
        currentScore = {currentScore}
        highScore = {highScore}

      />
      <Game 
        setCurrentScoreCallback = {setCurrentScoreCallback}
        updateHighScore = {updateHighScore}
      />
    </div>
  );
}

export default App;
