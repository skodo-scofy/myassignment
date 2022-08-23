import React from 'react'
import Plan from './Plan'


const Main = () => {

    let reload = ()=>{
        window.location.reload()
      }
      let link1 ='#'
  return (
    <div className='card'>
         <h1>Order Summary</h1>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <Plan/>
        <button className='btn'>Proceed to Payment</button> <br />
        <a href= {link1} onClick={reload} > Cancel Order</a>
    </div>
  )
}

export default Main

