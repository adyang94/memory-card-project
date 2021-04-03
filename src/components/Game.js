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
  const [pictureInfo, setPictureInfo] = useState([
    {
      name: "img1",
      src: img1,
      clicked: false
    },
    {
      name: "img2",
      src: img2,
      clicked: false
    },
    {
      name: "img3",
      src: img3,
      clicked: false
    },
    {
      name: "img4",
      src: img4,
      clicked: false
    },
    {
      name: "img5",
      src: img5,
      clicked: false
    },
    {
      name: "img6",
      src: img6,
      clicked: false
    },
    {
      name: "img7",
      src: img7,
      clicked: false
    },
    {
      name: "img8",
      src: img8,
      clicked: false
    }
  ]);
  const [score, setScore] = useState(0);

  function hasBeenClicked (num) {
    if(pictureInfo[num].clicked === false) {
      setPictureInfo(() => {
        let newData = [...pictureInfo];
        newData[num].clicked = true;
        setScore(score + 1);
        return newData;
      })
      console.log(`Picture clicked status: ${pictureInfo[num].clicked}`);
      return false;
    }
    return true;
  };
  const randomizerAndTracker = (num) => {
    
    if (hasBeenClicked(num)) {
      alert('Clicked before!  Game Over!')
      props.updateHighScore(score);
      setScore(0);
      setPictureInfo(() => {
        let newPictureInfo = pictureInfo.map((object) => {
          object.clicked = false;
          return object;
        })
        return newPictureInfo;
      });
      return;
    }

    console.log('RANDOMIZER RUNNING');
    let newArrayOrdering = [];
    let newNumber = Math.floor(Math.random() * 8);

    while (newArrayOrdering.length !== 8) {
      while (newArrayOrdering.includes(newNumber)) {
        newNumber = Math.floor(Math.random() * 8);
      }
      newArrayOrdering.push(newNumber);
    }
    console.log(`New Array Order: ${newArrayOrdering}`);
    setImgArrayOrdering(newArrayOrdering)
  };

  useEffect(()=> {
    console.log('useEffect');
    console.log(`score3: ${score}`);
    props.setCurrentScoreCallback(score);
  });

  return (
    <div>
      <div className = "imageContainer">
        {imgArrayOrdering.map((index) => {
          return(
            <img src={pictureInfo[index].src} alt="" dataset={index} key={index} className = "images" onClick = {() => {randomizerAndTracker(index)}} style={{cursor: "pointer"}} />)
        })}
      </div>
    </div>
  )
}

export default Game;