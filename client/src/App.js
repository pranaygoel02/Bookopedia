import React,{useEffect, useState} from 'react'
import {Route, Routes } from 'react-router-dom'
import Button from './components/MuiButton';
import Navbar from './components/Navbar';
import './index.css'
import Books from './components/Books'
import NewListings from './components/NewListings'
import Home from './screens/Home'
import BookDetail from './screens/BookDetail';

function App() {
  return (
    <>
    
    <div className='container'>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:isbn" element={<BookDetail/>}/>
    </Routes>
    
    </>
  );
}

export default App;
