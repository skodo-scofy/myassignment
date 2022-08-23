import React from 'react';
import { useState } from 'react';
import './Click.css'


const Click = () => {
   const [age,setAge] = useState(40)
    // console.log(useState(20));
    let number = 20
    function ageChanger(){
        setAge(50)

    }
    function handleClick(){
        console.log('Medina clicked me');
    }

    let handleAgain = ((name)=>{
        number = 50
        let speaker = `${name} clicked me ${number} times`
        console.log(speaker);
    })
  return (
    <div>
        <button onClick={handleClick} className='btn'>click me</button>
        <h2> {number} </h2>
        <button onClick={ ()=> handleAgain('Wale')} className='btn'>click me again</button>
        <h1> {age} </h1>
        <button onClick={ageChanger} className='btn'>click to change age</button>
        <h2> My name is Eggy </h2>
        <button className='btn'>Click to get my name</button>
    </div>
  )
}

export default Click

