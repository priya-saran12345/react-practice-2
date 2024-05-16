import React, { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'

const Totalscore = ({tscore}) => {
  
  return (
    <div className='text-center '>
    
        <h1 style={{fontSize: "82px" }} >
        {tscore}</h1>
        <p className='fw-bold '>Total Score</p>
    </div>
  )
}

export default Totalscore