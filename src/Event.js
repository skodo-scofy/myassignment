import React, { useState } from 'react';

const Event = () => {
  // const [name, setName] = useState('Wale')
  // const [height, setHeight] = useState('tall')
  // const [complexion, setComplexion] = useState('light')
  // const [gender,setGender] = useState('guy')
  const [person,setPerson] = useState({
    name:'Wale',
    height: 'tall',
    complexion: 'light',
    gender: 'guy',

  })
  let changeName = () => {
    if (person.name === 'Skodoscofy' && person.height === 'tall' && person.complexion === 'light' && person.gender === 'guy') {
      setPerson({name:'Oluwakemi', height:'short', complexion:'dark', gender:'baby girl'})
      // setHeight('short')
      // setComplexion('dark')
      // setGender('baby girl')
      // setName('Oluwakemi')
    } else {
      setPerson({name:'Skodoscofy', height:'tall', complexion:'light', gender:'guy'})
      // setName('Wale')
      // setHeight('tall')
      // setComplexion('light')
      // setGender('guy')
    }
  }
  return (
    <div>
      <h2>
        {/* My name is {name},I am a {height} and {complexion} skinned {gender} */}
        My name is {person.name},I am a {person.height} and {person.complexion} skinned {person.gender}
      </h2>
      <button className='btn' onClick={changeName}>
        click to see my real name
      </button>
    </div>
  )
}

export default Event 








