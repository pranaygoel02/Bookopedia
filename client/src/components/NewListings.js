import React,{useMemo,useCallback,useContext} from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import BookCard from './BookCard/BookCard_new'
import './Booklist.css'
import { useBooks } from '../BookContext'
import Search from '@mui/icons-material/Search'

export default function NewListings() {
    const [NewBooks,setNewBooks] = useState([])
    const newListRef = useRef()
    const [open,setOpen] = useState(true)
    const {setnewlistings,newlisting} = useBooks()

    const fetchData = useCallback( async () => {
        console.log('fetching data');
        fetch(`/new-books`).then(res => res.json()).then(data => {
            return ([...data.books.map(b => {
                    fetch(`/searchIsbn/${b.isbn13}`).then(res => res.json()).then(isbnData => {
                        setNewBooks(prevBooks => 
                             [...new Set([...prevBooks,isbnData])])
                    })    
                })])
        })
    },[])
    
    useEffect(() => {
        // fetch("/new-books").then(res => res.json()).then(data=>{
        //     setNewBooks(prevNewBooks => {
        //         return ([...data.books.map(b => b)])
        //     })
        //     console.log(data.books);
        // })
        if(newlisting.length == 0){
            console.log('fetchDataaaaaaaaaaa useeffecttt runninggggg...............'); 
            fetchData()   
        }
    },[fetchData])
    

    NewBooks.sort((a, b) => a.title.localeCompare(b.title))


    useEffect(()=>{
        console.log('setting new listssss..........');
        newlisting.length != 20 && setnewlistings(prev=>[...new Set([...NewBooks])])
        window.localStorage.setItem('NEW_BOOKS',JSON.stringify([...NewBooks]))
    },[NewBooks])
    
    return (
    <div>
        <h2 className='new-list-btn' onClick={()=>{
            newListRef.current.classList.toggle('hide');
            setOpen(prev=>!prev)
        }} style={{"display": "flex","padding": "0.5em",cursor:'pointer'}}>
            {open ? 'New Listings' : '>'}
        </h2>
        <div ref={newListRef} className='new-listings'>
            {newlisting?.map(book => BookCard({book}))}
        </div>
    </div>
  )
}
