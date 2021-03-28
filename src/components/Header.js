// This header component will contain the title, score, and github link.

import React, { useState } from 'react';
function Header () {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  
  return (
    <div>
      <p>
        Current Score: {currentScore}
      </p>
      <p>
        High Score: {highScore}
      </p>
    </div>
  );

}
 export default Header;