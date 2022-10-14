import React from 'react'
import Hero from './images/Hero.svg'

export default function Blank(  ) {
  return (
    <div className='welcome'>
        <h1>Your One Stop Destination For<br></br><span style={{color:'rgb(253, 193, 52)'}}> IT eBooks.</span></h1>
        <img src={Hero} />
    </div>
  )
}
