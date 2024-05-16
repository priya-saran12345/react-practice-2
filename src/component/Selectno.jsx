import React, { useState } from 'react'

const Selectno = ({ setSelectnumber,seterr}) => {
    const arr=[1,2,3,4,5,6]

    // const changethings=(i)=>{
    //     document.getElementById(`a${i}`).style.backgroundColor='black';
    //     document.getElementById(`a${i}`).style.color='white'
    // }
    //     const nochange=(i)=>{
    //     document.getElementById(`a${i}`).style.backgroundColor='white';
    //     document.getElementById(`a${i}`).style.color='black'
    // }
 const select=(elem)=>{
    setSelectnumber(elem)
    seterr('')

 }





  return (
    <div className='d-flex'>
            {
        arr.map((elem,i)=>{
            return(
                <div  key={i}  id={`a${i}`}  className=' px-3 py-2 mx-3 border border-3 border-dark'
                onClick={ ()=>select(elem)}
                >
                    {/* {(Selectno===i+1)?changethings(i):nochange(i)} */}
                {elem}
            </div>
        
         
            )
        })
    }



    </div>


)
}

export default Selectno