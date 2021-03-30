import React, {useEffect, useState} from 'react';

function Game (props) {
  const [score, setScore] = useState(0);

  const increment = () => {
    setScore(score + 1);
    console.log(`score: ${score}`);
  }
  const save = () => {
    console.log('save--------------');
    props.updateHighScore(score);
    setScore(0);
  }

  useEffect(()=> {
    console.log('useEffect');
    props.setCurrentScoreCallback(score);
  });

  return (
    <div>
      <button
        onClick = {increment}
      >
        Add
      </button>
      <button
        onClick = {save}
      >
        Save
      </button>
    </div>
  )
}

export default Game;