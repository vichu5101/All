import React from 'react'
import { useState } from 'react'
const IncreaseNumber = () => {
 const[num,setNum]=useState(1)

  return (
    <div>
      <h1>{num}</h1>
      <button onMouseOver={()=>setNum(num+1)}>Hover here to increment the number</button>
    </div>
  )
}

export default IncreaseNumber
