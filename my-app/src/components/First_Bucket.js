import { useState } from "react"
import SecondBucket from "./SecondBucket"

function FirstBucket(props){
    const [gameStatus, setGameStatus] = useState({value: props.initialValue, numberOfClicks: 0})
    const handleClick = () => {
        setGameStatus((prev) => {return ({...prev, value: Math.floor(prev.value/2), numberOfClicks: prev.numberOfClicks + 1 })})
    }
    return(
        <div style={{border: "2px solid red", padding: "20px 10px"}}>
            <p> First Bucket Value is: {props.initialValue}</p>
            <button onClick={() => handleClick()}>PLAY</button>
            {gameStatus.value === 0 ?
            <SecondBucket result={gameStatus}/> :
            <p> the current value is: {gameStatus.value}. Keep pressing the button until you get 0</p>
            }

            

        </div>
    )

}

export default FirstBucket