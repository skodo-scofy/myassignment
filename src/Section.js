import React from 'react'
import { useState } from 'react'
import './Section.css'
const Section = () => {
    const [data,setData] = useState([
        { id:1,author:'Geraldine',company:'Geraldin consult', services:'We offer consultancy'},
        { id:2,author:'Lawrence',company:'D-Law Tech', services:'We offer Tech services'},
        { id:3,author:'Medina',company:'Medina\'s Day-care',services:'We offer day-care services'},
        { id:4,author:'Silas',company:'Silas Engr', services:'We offer Engineering services'},
        { id:5,author:'Esther',company:'Estee\'s influencing coy', services:'We offer fashion tips'},
        { id:6,author:'Wale',company:'Wale\'s  software coy', services:'We offer software services'}
    ])
    function handleRemove(info){
        let newData = data.filter((dd)=> dd.id !== info )
        setData(newData)
    }
  return (
    <div>
        <h2>Top 7 Company's in Nigeria </h2>

        <div>
            {data.map((datum)=>{
                const {author,services,company,id} = datum
                return (
                  <div className='inner-section ' key={id}>
                    <h2> {author} </h2>
                    <h2> {company} </h2>
                    <h2> {services} </h2>
                    <button className='btn' onClick={()=>handleRemove(id)}>Click to remove</button>
                  </div>
                )
            })}
            <button className='btn' onClick={()=> setData([])} >clear all</button>
        </div>
    </div>
  )
}

export default Section

