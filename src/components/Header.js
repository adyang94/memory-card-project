// This header component will contain the title, score, and github link.

function Header (props) {
  
  return (
    <div>
      <h1>Memory Game</h1>
      <p>
        Current Score: {props.currentScore}
      </p>
      <p>
        High Score: {props.highScore}
      </p>
    </div>
  );

}
 export default Header;