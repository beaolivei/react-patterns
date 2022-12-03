import { useState } from "react"
import FirstBucket from "./First_Bucket"

function PlayFieldComponent(){
    const [gameOn, setGameOn] = useState(false)
    const [initialValue, setInitialValue] = useState(null)

    const handleClick = () => {
        setGameOn(true)
        const randomInitialNumber = Math.floor(Math.random() * 100)
        setInitialValue(randomInitialNumber)
    }
    return(
    <div>
        { gameOn ? 
        <div>
            <p>Your goal is to get the value 0 by clicking less than 5 times</p>
            <FirstBucket initialValue = {initialValue}/>
        </div>:
        <button onClick ={() => handleClick()}>
             START
        </button>
        }
    </div>
    )
}

export default PlayFieldComponent