import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Selectno from './Selectno'
import Diceroll from './Diceroll'



const Playgame = () => {
  const [err, seterr] = useState(false)
  const [currdice, setcurrdice] = useState(1)
  const [Selectnumber, setSelectnumber] = useState()
  const [tscore, settscore] = useState(0)

  const nextdice=()=>{
    if(!Selectnumber){
      seterr("You have not selected any no")
      return
    }
    // else{
    //   seterr(false)

    // }

const random=(Math.floor(Math.random()*10))%6+1
    setcurrdice  (random);
    setSelectnumber();
    if(Selectno===random){
      settscore(tscore+random)
    }
    else{
      settscore(tscore-2)

    }

 } 


  return (<>
  
   <p className='container text-danger fs-6 mt-2 text-end ' >{err}</p>
  
    <div className='container  mt-4 d-flex align-items-start   justify-content-between        '>
    <Totalscore  tscore={tscore} />
    <div className='text-end'>
    <Selectno setSelectnumber={setSelectnumber} seterr={seterr} />
<p className='my-2 fw-bold mx-3'>Select Number</p>
    </div>
    </div>
<Diceroll currdice={currdice} nextdice={nextdice}  settscore={settscore} />
  </>
  )
}

export default Playgame