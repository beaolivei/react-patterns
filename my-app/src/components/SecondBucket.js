function SecondBucket(props){
return(
    <div>
    {props.result.value === 0 && props.result.numberOfClicks < 6 ?
    <p> You WIN! 🎉. You got the number 0 by clicking {props.result.numberOfClicks} times </p>  :
    <p> Sorry, but you lost! 👎 Please try again </p> 
}
    <button onClick={() => document.location.reload()}> RESTART</button>
    </div>
)
}
export default SecondBucket