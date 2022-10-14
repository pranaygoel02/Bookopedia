import React,{useEffect, useState} from 'react'
import '../index.css'
import Books from '../components/Books'
import NewListings from '../components/NewListings'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    
    <div className='partition'>
        <NewListings/>
        <Books/>
      </div>
      </>
  )
}
