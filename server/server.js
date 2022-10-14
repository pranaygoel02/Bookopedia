const {fetch} = require ('cross-fetch')

const { response } = require('express')
const express = require('express')
const app = express()

const newAPI = "https://api.itbook.store/1.0/new"
const api1 = "https://api.itbook.store/1.0/search/"
const api2 = "https://api.itbook.store/1.0/books/"

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
    const {isbn} = req.params
    fetch(`${api2}/${isbn}`).then(response => response.json()).then(data => {
        res.json(data);
    })
})

app.listen(5000,()=> {console.log("Server started at port 5000")})