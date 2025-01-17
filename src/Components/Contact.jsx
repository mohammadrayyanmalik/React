import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
// use params ka use karenge jab humen ur se data fetchn kara hoga

function Contact() {
  const {id}=useParams()
  const navigate=useNavigate()
  return (
    <div>
      <p>id fetch from route{id}</p>
      <button onClick={()=>{navigate("/")}}>Click here</button>
    </div>
  )
}

export default Contact