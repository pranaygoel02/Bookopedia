import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import BookSearch from "./BookSearch";
import GetIsbn from "./GetIsbn";
import './Booklist.css'
import SearchIcon from "@mui/icons-material/Search"
import MuiButton  from "./MuiButton";
import Blank from "./Blank";
import { height } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import {useBooks} from '../BookContext'

export default function Books() {
  const [listing,setListing] = useState(false)
  const [searching,setSearching] = useState(false)
  const [load, setLoading] = useState(false)
  // const [val,setVal] = useState('')
  const [query, setQuery] = useState('')
  // const [pageNumber,setPageNumber] = useState(1)
  const {currBooks,val,setVal,pageNumber,setPageNumber} = useBooks()
  
  const {
    loading,
    error,
    Books,
    totalBooks
  } =  BookSearch()
  
  console.log('====================================');
  console.log('curr val: ',val);
  console.log('====================================');
  console.log('====================================');
  console.log('currBooks: ',currBooks);
  console.log('====================================');
  const isbn = GetIsbn(Books)
  // const bookDetails = BookDetailSearch(isbn)
  
  // bookDetails.sort((a, b) => a.title.localeCompare(b.title))
  useEffect(()=>{
    if(Books.length % 10 == 0 || Books.length == totalBooks){
      setLoading(false)
    }
  },[Books])

  console.log("isbn",isbn);
  // console.log("details",bookDetails);
  // console.log("details[0]",bookDetails[0]);
  console.log("books",Books);
  
  function nextPage(){
    setPageNumber(prevPageNumber => prevPageNumber + 1)
    setLoading(true)
  }
  function prevPage(){
    setPageNumber(prevPageNumber => prevPageNumber - 1)
  }
  function handleQuery(e){
    console.log(e.target.value);
    setQuery(e.target.value)
  }

  function handleSearch(e){
    setVal(query)
    console.log("Value to Search",val);
    // console.log(val);
    setPageNumber(1)
    setSearching(true)
    setListing(true)
    e.preventDefault()
  }

  return (
    <div style={{"width":"100%",minHeight:'100vh',flex:1,flexDirection:'column',justifyContent:'flex-start',marginTop:'0.5em'}}>
      
      <form className="auto-margin searchBar"  onSubmit={handleSearch}>
        <input  value={query} type={"text"} placeholder={"Try- python, java & so on..."} onChange={handleQuery}></input>
        <button className="searchBtn" type={"submit"}>{<SearchIcon/>}</button>
      </form>
      
      <div style={{position:'relative'}}>
       <div style={{position:'sticky',top:0,left:'5em',zIndex:1,background:'rgb(26, 53, 72)',color:'white',padding:'0.5em'}}>
       {(val && Books.length > 0) && <h2>Showing results for {val}</h2>}
       {((load || (val && Books.length == 0) || (Books.length != totalBooks && Books.length%10 > 0)) && Books.length != totalBooks) && <LinearProgress style={{width:'100%'}} color="primary"/>}
       </div>
      {currBooks.length > 0 ? <BookList props={Books}/>: <Blank/>}
      {Books.length > 0 &&  <div className="Pagination">
      
          <div>
            {/* {pageNumber>1 && <button onClick={prevPage}>Prev</button>} */}
            {pageNumber*10 < totalBooks  && <button onClick={nextPage}>Load More</button>}
          </div>
          {totalBooks > 0 && <p>{Books.length} of {totalBooks}</p>}
        </div>}
      </div>
    </div> 
  );
}


