import React, {useEffect, useState} from 'react';
import img1 from '../pictures/1.jpg';
import img2 from '../pictures/2.jpg';
import img3 from '../pictures/3.jpg';
import img4 from '../pictures/4.jpg';
import img5 from '../pictures/5.jpg';
import img6 from '../pictures/6.jpg';
import img7 from '../pictures/7.jpg';
import img8 from '../pictures/8.jpg';

function Game (props) {
  const [imgArrayOrdering, setImgArrayOrdering] = useState([0, 1, 2, 3, 4, 5, 6, 7])
  
  let pictureInfo = [
    {
      name: "img1",
      src: img1
    },
    {
      name: "img2",
      src: img2
    },
    {
      name: "img3",
      src: img3
    },
    {
      name: "img4",
      src: img4
    },
    {
      name: "img5",
      src: img5
    },
    {
      name: "img6",
      src: img6
    },
    {
      name: "img7",
      src: img7
    },
    {
      name: "img8",
      src: img8
    }
  ];

  const randomizer = () => {
    console.log('RANDOMIZER RUNNING');
    let newArrayOrdering = [];
    let newNumber = Math.floor(Math.random() * 8);

    while (newArrayOrdering.length !== 8) {
      while (newArrayOrdering.includes(newNumber)) {
        newNumber = Math.floor(Math.random() * 8);
      }

      newArrayOrdering.push(newNumber);
      console.log(`New Number: ${newNumber}`);
    }
    setImgArrayOrdering(newArrayOrdering)

  };

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
      <button onClick = {randomizer}>Randomize</button>
      <br/>
      

      {imgArrayOrdering.map((index) => {
        return(
          <img src={pictureInfo[index].src} alt="" key={index} height = "100px" width = "100px" onClick = {randomizer} />
        )
      })}

      {/* {pictureInfo.map((pictureInfo, i) => {
        
        return (
          <img src = {pictureInfo.src} key={i} alt="" height = "100px" width = "100px" />
        );
      })} */}
      {/* <img src = {img1} alt ="Dog 1" height = "100px" width = "100px" />
      <img src = {img2} alt = "Dog 2" height = "100px" width = "100px" /> */}
      {/* <img src = {pictureInfo[1].src} alt="" /> */}
    </div>
  )
}

export default Game;