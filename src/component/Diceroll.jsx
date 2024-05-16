import React, { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'

const Diceroll = ({currdice,nextdice,settscore}) => {
const [instruction, setinstruction] = useState(false)
  return (
<>

    <div className=" my-2   container text-center w-50">
      <img src={`/images/dice_${currdice}.png ` }alt="" 
      style={{height:"150px"}}  
      onClick={nextdice}></img>
      <p>Click on Dice to roll</p>
      <button className="btn  border border-dark fw-bold"  
      
      onClick={()=>settscore(0)}
      
      >
       Reset score</button>
<br></br>
<br></br>

      <button className="btn btn-dark fw-bold"  onClick={()=>{
        setinstruction((Prev)=>!Prev)
      }} > Show rules</button>
    </div>
    {
     instruction &&<div className='container w-50 rounded my-3 ' style={{backgroundColor:"#d63384"}}>
        <h5 className='py-2'>How to play dice game</h5>
        <p className='px-2 pb-2 fs-6'>
        Select any number
        <br>
        </br>
        Click on dice images<br></br>
        After click on the dice image if seleted no is equal to the dice no  u will get same point as dice
        if u get wrong guess then 2 point will be deducted
        </p>
    </div>
    }
</>


)
}

export default Diceroll