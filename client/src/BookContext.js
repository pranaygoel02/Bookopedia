import React,{useState,useContext} from 'react'

const BookContext = React.createContext()

export function BookProvider({children}){
    const [currBooks,setCurrBooks] = useState([])
    const [newlisting,setnewlistings] = useState([])
    const [val,setVal] = useState('')
    const [pageNumber,setPageNumber] = useState(1)
    const value = {
        currBooks,
        setCurrBooks,
        newlisting,
        setnewlistings,
        val,setVal,pageNumber,setPageNumber
    }
    return(
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export function useBooks(){
    return useContext(BookContext)
}