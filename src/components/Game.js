import React, {useEffect, useState} from 'react';
import img1 from '../pictures/1.jpg';
import img2 from '../pictures/2.jpg';

function Game (props) {
  
  
  let pictureInfo = [
    {
      name: "img1",
      src: require("../pictures/1.jpg")
    },
    {
      name: "img2",
      src: require("../pictures/2.jpg")
    }
  ];

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
      <div className = "cardContainer">

      </div>
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
      <button>Randomize</button>
      <br/>
      <img src = {img1} alt ="Dog 1" height = "100px" width = "100px" />
      <img src = {img2} alt = "Dog 2" height = "100px" width = "100px" />

      {pictureInfo.map((pictureInfo, i) => {
        
        return (
          <img src = {pictureInfo.src} key={i} alt="" height = "100px" width = "100px" />
        );
      })}
    </div>
  )
}

export default Game;