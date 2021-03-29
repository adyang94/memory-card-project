import React, {useEffect} from 'react';

function Game (props) {
  let score = 0;

  const increment = () => {
    score++;
    console.log(`score: ${score}`);
  }

  useEffect(()=> {
    props.setCurrentScoreCallback(score);
  })

  return (
    <div>
      <button
        onClick = {increment}
      >
        Add
      </button>
      <button
        
      >
        Save
      </button>
    </div>
  )
}

export default Game;