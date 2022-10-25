import React,{useEffect} from 'react'
import axios from 'axios'
import BookCard from './BookCard/BookCard_new'
import './Booklist.css'
import { useBooks } from "../BookContext";
export default function BookList({props}) {
  var authors=""
  const {currBooks} = useBooks()
  
  const bookList =  currBooks?.map(book => {
      // const details = BookDetailSearch(book.isbn13)
      return(
      <BookCard book = {book}/>
      )})
  
  return(
    <div className='BookContainer'>
      {bookList}
    </div>
  );
}
