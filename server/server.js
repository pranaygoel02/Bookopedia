const {fetch} = require ('cross-fetch')

const { response } = require('express')
const express = require('express')
const app = express()

const newAPI = "https://api.itbook.store/1.0/new"
const api1 = "https://api.itbook.store/1.0/search/"
const api2 = "https://api.itbook.store/1.0/books/"
const downloadUrl = "https://www.dbooks.org/api/book/"


app.get("/", (req,res)=>{
    res.send("Hello");
})


app.get("/new-books",(req,res)=>{
    console.log('fetching new books');
    fetch(newAPI).then(response => response.json()).then(data=>{
        res.json(data);
    });
})

app.get("/searchBook/:query/:pageNumber",(req,res)=>{
    console.log(req.params);
    const {query,pageNumber} = req.params
    fetch(`${api1}/${query}/${pageNumber}`).then(response => response.json()).then(data => {
        res.json(data);
    })
})

app.get("/searchIsbn/:isbn",(req,res)=>{
    console.log('getting download link');
    const {isbn} = req.params
    fetch(`${api2}/${isbn}`).then(response => response.json()).then(data => {
        res.json(data);
    })
})

app.get("/download/:isbn",(req,res)=>{
    const {isbn} = req.params
    fetch(`${downloadUrl}/${isbn}`).then(response=>response.json()).then(data=>res.json(data))
})

const path = require('path')

app.use(express.static(path.join(__dirname,"client/build")))

app.get('*',(req,res)=>{    
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})