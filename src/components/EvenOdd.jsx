import { useEffect, useState } from "react";

function EvenOdd(){
    let [inputValue,setInputValue]=useState(1)
    let [answer,setAnswer]=useState("Odd")

    useEffect(()=>{
        let v=parseInt(inputValue)

        if(v%2==0)
            setAnswer("even")
        else
            setAnswer("Odd")


        // console.log("EvenOdd")
    },[inputValue])

    return(
        <div>
            <input type="number" value={inputValue}
             onChange={(event)=>{ 
                setInputValue(event.target.value)
                }} />
                <h1>{answer}</h1>
        </div>
    )
};

export default EvenOdd;