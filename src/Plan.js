import React from 'react'
import { useState } from 'react'
import icon from './Images/icon-music.svg'
export const Plan = () => {
    const [change, setChange]= useState({
        name:'Annual Plan',
        amount:'$55.99/year'
      })
      let changePlan =()=>{
        if(change.name==='Annual Plan'){
                        setChange({ 
                          name:'Monthly plan' , 
                          amount:'$10.20/Month'
                          });
  
        }else{
                setChange({
                    name:'Annual Plan',
                    amount:'$55.99/year'
                  })
        }
          
      }
  
  return (
    <div className='plan'>
        <img src={icon} alt="icon" />
        <div> <h3> {change.name} </h3> {change.amount} </div>
      <a href= {'#'} onClick={changePlan}>Change</a>
        
    </div>
  )
}
export default Plan