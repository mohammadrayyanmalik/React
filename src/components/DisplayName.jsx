import { useEffect, useState } from "react";

function DisplayName()
{
    
    let [name,setName]=useState("Hamza")

    let[length,setlength]=useState(10);
    let[breadth,setbreadth]=useState(12);
    let[area,setArea]=useState(length*breadth);

    useEffect(()=>{
        setArea(length*breadth)
    },[length,breadth])    



    return (
        <div>
            <input type="text" value={name} onChange={(event)=>{
                setName(event.target.value)
                // console.log(name)
            }}/>
            <h1 className="name">{name}</h1>
            <hr />



            <input type="number" placeholder="length" value={length} 
            onChange={(event)=>{
                setlength(event.target.value)
            }} />
            <input type="number" placeholder="breadth"  value={breadth}
            onChange={(event)=>{
                setbreadth(event.target.value)
            }} />
            <h1>Area is {area}</h1>




        </div>
    )
}
export default DisplayName;