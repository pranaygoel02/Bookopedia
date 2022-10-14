import React from 'react'
import { Link } from 'react-router-dom'
import BookImage from './BookImage'
import BookTitle from './BookTitle'
import './BookCard.css'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SendIcon from '@mui/icons-material/IosShareRounded'
import Star from './Star';
import Price from './Price'


export default function BookCard({book}) {
    // console.log(book)
    return (
    <div className='card'>
      <div className='bookImage'>
        <img style={{objectFit:'cover',scale:1.2}} src={book.image}></img>
      </div>
      <div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5em',marginBottom:'0.5em'}}>
        <h2 className='book-title'>{book.title}</h2>
        <p className='author'>- by {book.authors}</p>
        <p>{book.subtitle}</p>
      </div>
      <div className='flex' style={{"justify-content":"space-between",marginBottom:'0.5em'}}>
        {book.rating > 0 && <Star rating = {book.rating}/>}
        {/* <Price price={book.price}/> */}
      </div>
      <div className='flex'>
      <div className='flex' style={{"justify-content":"space-between",flexDirection:'row-reverse'}}>
        <Link to={{
          pathname: `/${book.isbn13}`,
          // query: {
          //   title: book.title,
          //   details: JSON.stringify(book),
          // }
        }}><div className='btn filled'>See More</div></Link>
        {"pdf" in book && <div className='btn outlined'>PDF</div>}
      </div>
        </div>
      </div>
    </div>
  );
}