import React,{useContext,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useBooks} from '../BookContext'
import BookTitle from '../components/BookCard/BookTitle'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../index.css'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from '@mui/material/CircularProgress';


function BookDetail() {
  const {isbn} = useParams()
  const {newlisting,currBooks} = useBooks()
  console.log('newlisting: ',newlisting);
  console.log('currBooks: ',currBooks);
  const result_curr = currBooks?.find(({ isbn13 }) => isbn13 === isbn);
  const result_new = newlisting?.find(({ isbn13 }) => isbn13 === isbn);
  const [downloadLink,setDownloadLink] =  useState('')
  const [book, setBook] = useState(null);
  const [getting, setGetting] = useState(false)
  // const book_data = result_curr ? result_curr : result_new
  // let bookData = book;

let download = async () => {
  setGetting(prev=>true)
  fetch(`download/${book?.isbn10}`).then(res=> res.json()).then(data => {
    setDownloadLink(prev=>data.download)
    console.log(data.download);
    setGetting(prev=>false)
    // return data.download
  })
}
  useEffect(() => {
    var newBookData =JSON.parse(window.localStorage.getItem('NEW_BOOKS'));
    var bookData =JSON.parse(window.localStorage.getItem('SEARCH_BOOKS'));
    console.log('SEARCH_BOOK: ',bookData);
    console.log('NEW_BOOK: ',newBookData);
    var available_books = [...newBookData,...bookData]
    var result = available_books.find(obj => obj.isbn13 === isbn)
    setBook(prev=>result)
  }, []);

  // useEffect(()=>{
  //   window.localStorage.setItem('Book',JSON.stringify(book))
  // },[book])

  
  return (
    book && 
    <div className='book-detail-container' style={{flex:1,display:'flex',alignContent:'center',color:'whitesmoke',justifyContent:'center',marginBottom:'1em'}}>
      <div style={{display:'flex',flexBasis:'30%',alignItems:'center',justifyContent:'center'}}>
      <img style={{width:'100%'}} src={book.image}></img>
      </div>
      <div style={{position:'relative',display:'flex',flexBasis:'55%',flexDirection:'column',gap:'0.5em',marginTop:'3em'}}>
      <BookTitle title={book.title}/>
      <h4>by- {book.authors}</h4>
      <hr style={{margin:'0.5em 0'}}></hr>
      <p style={{display:'flex',gap:'0.5em',marginBottom:'0.5em'}}><LocalLibraryIcon/> Publisher: <span style={{fontWeight:'bolder'}}>{book.publisher}</span></p>
      <Stack style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start'}} direction="row" spacing={1}>
        <Chip style={{marginBottom:'0.8em'}} color='primary' label={book.year}/>
        <Chip style={{marginBottom:'0.8em'}} color='primary' label={book.language} />
        <Chip style={{marginBottom:'0.8em'}} color='primary' label={`${book.pages} pages`}/>
        <Chip style={{marginBottom:'0.8em'}} color='primary' label={book.price}/>
        {"pdf" in book && <Chip color='secondary'  label="Free PDF available"/>}
     </Stack>
     <div style={{display:'flex',flexDirection:'column',gap:'0.5em',margin:'1em 0em',borderRadius:'8px',outline:'0.2px solid hsl(200,85%,75%)',overflow:'hidden'}}>
      <h4 style={{background:'hsl(200,85%,75%)',color:'black',padding:'0.5em 0.75em'}}>Description:</h4>
      <p style={{padding:'0.25em 0.75em 0.5em'}}>{book.desc}</p>
     </div>
     <div style={{display:'flex',gap:'1em'}}>
     {"pdf" in book && <div onClick={download} className='btn' id='download-btn' style={{alignSelf:'flex-start',display:'flex',alignItems:'center'}}><DownloadIcon/></div>}
     {getting && <CircularProgress />}
     </div>
     {downloadLink && 
     <div style={{marginTop:'1em',borderRadius:'.6em',background:'white',padding:'1em',color:'black'}}>
      <h3 style={{marginBottom:'1em'}}>Your link is ready!</h3>
      <a className='btn' href={downloadLink} download>Download</a>
     </div>
     }
     {downloadLink === undefined && <h3>Oops! Cannot get link currently.</h3>}
      </div>
    </div>
  )
}

export default BookDetail