import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useBooks} from '../BookContext'

function BookDetail() {
  const {isbn} = useParams()
  const {newlisting,currBooks} = useBooks()
  console.log('newlisting: ',newlisting);
  console.log('currBooks: ',currBooks);
  const result_curr = currBooks?.find(({ isbn13 }) => isbn13 === isbn);
  const result_new = newlisting?.find(({ isbn13 }) => isbn13 === isbn);
  const book = result_curr ? result_curr : result_new
  return (
    <div style={{flex:1,display:'flex'}}>
      <div>
      <img style={{scale:1.2}} src={book.image}></img>
      </div>
      <div>
      <h1>{book.title}</h1>

      </div>
    </div>
  )
}

export default BookDetail