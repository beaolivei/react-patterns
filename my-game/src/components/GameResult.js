function GameResult(props){
    return(
        <div>
            {props.score.numberofClicks <= 5 ?
            <p> Congrats, you WON! </p> :
            <p> Sorry, you LOST! </p>   
        }
        <button onClick={() => document.location.reload()}> RESTART</button>
        </div>
    )
}
export default GameResult