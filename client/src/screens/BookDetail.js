import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useBooks} from '../BookContext'
import BookTitle from '../components/BookCard/BookTitle'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../index.css'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DownloadIcon from '@mui/icons-material/Download';

function BookDetail() {
  const {isbn} = useParams()
  const {newlisting,currBooks} = useBooks()
  console.log('newlisting: ',newlisting);
  console.log('currBooks: ',currBooks);
  const result_curr = currBooks?.find(({ isbn13 }) => isbn13 === isbn);
  const result_new = newlisting?.find(({ isbn13 }) => isbn13 === isbn);
  const book = result_curr ? result_curr : result_new
  return (
    <div style={{flex:1,display:'flex',alignContent:'center',color:'whitesmoke',maxWidth:'95vw',justifyContent:'center'}}>
      <div style={{display:'flex',flexBasis:'30%',alignItems:'center',justifyContent:'center'}}>
      <img style={{width:'100%'}} src={book.image}></img>
      </div>
      <div style={{display:'flex',flexBasis:'55%',flexDirection:'column',gap:'0.5em',marginTop:'3em'}}>
      <BookTitle title={book.title}/>
      <h4>by- {book.authors}</h4>
      <hr style={{margin:'0.5em 0'}}></hr>
      <p style={{display:'flex',gap:'0.5em',marginBottom:'0.5em'}}><LocalLibraryIcon/> Publisher: <span style={{fontWeight:'bolder'}}>{book.publisher}</span></p>
      <Stack direction="row" spacing={1}>
        <Chip color='primary' label={book.year}/>
        <Chip color='primary' label={book.language} />
        <Chip color='primary' label={`${book.pages} pages`}/>
        <Chip color='primary' label={book.price}/>
        {"pdf" in book && <Chip color='secondary'  label="Free PDF available"/>}
     </Stack>
     <div style={{display:'flex',flexDirection:'column',gap:'0.5em',margin:'1em 0em',borderRadius:'8px',outline:'0.2px solid hsl(200,85%,75%)',overflow:'hidden'}}>
      <h4 style={{background:'hsl(200,85%,75%)',color:'black',padding:'0.5em 0.75em'}}>Description:</h4>
      <p style={{padding:'0.25em 0.75em 0.5em'}}>{book.desc}</p>
     </div>
     
     {"pdf" in book && <div className='btn' id='download-btn' style={{alignSelf:'flex-start',display:'flex',alignItems:'center'}}><DownloadIcon/></div>}
      </div>
    </div>
  )
}

export default BookDetail