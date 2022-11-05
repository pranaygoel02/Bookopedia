import { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import {useBooks} from '../BookContext'

export default function BookSearch() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [Books,setBooks] = useState([])
    const [totalBooks,setTotalBooks] = useState(0)
    const {setCurrBooks,val,pageNumber} = useBooks()

    useEffect(() => {
        console.log('====================================');
        console.log('fetching fresh books');
        console.log('====================================');
        setLoading(true)
        setError(false)
        fetch(`/searchBook/${val}/${pageNumber}`).then(res => res.json()).then(data => {
            // setBooks([])
            setTotalBooks(data.total)
            return ([...data.books.map(b => {
                    fetch(`/searchIsbn/${b.isbn13}`).then(res => res.json()).then(isbnData => {
                        // console.log(isbnData)
                        setBooks(prevBooks => [...prevBooks,isbnData])
                    })    
                })])
        })
    },[val,pageNumber])

    useEffect(()=>{
        setBooks([])
        setCurrBooks(prev=>[])
    },[val])

    Books.sort((a, b) => a.title.localeCompare(b.title))
    
    useEffect(()=>{
        setCurrBooks(prev=>[...Books])
        window.localStorage.setItem('SEARCH_BOOKS',JSON.stringify([...Books]))
    },[Books])

    return {loading,error,Books,totalBooks}
}
