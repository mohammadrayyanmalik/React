import React from 'react'
import { Outlet } from 'react-router-dom'

function Courses() {
  return (
    <div>Courses
      <div className='border border-dark'>

        <Outlet/> 
      </div>
    </div>
  )
}

export default Courses