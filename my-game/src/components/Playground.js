import { useState } from "react"
import GameResult from "./GameResult"

function PlayGround(props){
    const [score, setScore] = useState({value: props.initialValue, numberofClicks: 0, isGameON: true})
    const handleClick = () => {
        setScore((prevState)=> {
            return({...prevState, value: Math.floor(prevState.value/2), numberofClicks: prevState.numberofClicks + 1})
        } )
    }
    return(
        <div style={{border: "2px solid red", padding: "20px 10px"}}>
            <p> The initial score is: {props.initialValue}</p>
            <button onClick={handleClick}>PLAY</button>
            {score.value > 0 ?            
            <div>
                <p> The current number is: {score.value} </p>
                <p> Number of clicks is: {score.numberofClicks}</p>
            </div> :
            <GameResult score={score}/>
            }

        </div>

    )
}

export default PlayGround