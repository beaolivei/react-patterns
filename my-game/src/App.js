import { useState } from "react";
import PlayGround from "./components/Playground";

function App() {
  const [isGameOn, setGameOn] = useState(false)
  const [initialRandomValue, setInitialRandomValue] = useState(null)
  
  const handleClick = () => {
    setGameOn(true)
    setInitialRandomValue(Math.floor(Math.random()*100))
  }
  return (
    <div >
      <p> My Game</p>
      { isGameOn ? 
      <PlayGround initialValue = {initialRandomValue}/> :
      <button onClick={handleClick}> START </button>
      }
    </div>
  );
}

export default App;
