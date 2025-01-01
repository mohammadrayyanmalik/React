import { use, useState } from "react";


function ChangeName()
{
    let [name,setName]=useState("Rayyan")
    let [year,setYear]=useState(2024)
    
    const change=()=>{
        setName("Qasim")
    }
    const changeYear=()=>{
        setYear(2026)
    }

    return (
    <div>
        <h1 onClick={change}>{name}</h1>
        <p>{name}</p>
        <li>{name}</li>

        <hr />
        <h1 onClick={changeYear}>{year}</h1>
    </div>
    )
}
export default ChangeName;