import React from 'react'

const Startgame = ({change}) => {
  return (
    <div className=' container  align-items-center py-5 justify-content-between d-flex text-centre'>
        <img className='my-5' style={{height:"50vh" , width:"40%"}} src={require("../image/dice.png")} 
        alt='ths is image not found'/>
        <div className='text-center'>
            <h1 className='text-uppercase '
             style={{fontSize:"7.5vw", fontWeight:"700" }}>Dice game</h1>
            <button className='btn btn-dark px-3 py-2 fs-5' 
        onClick={change}>Play Now</button>
        </div>
    </div>

  )
}

export default Startgame