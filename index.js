const port = 3000;
const express = require('express');
require('dotenv').config

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/twitter',(req,res)=>{
    res.send('Welcome to X');
})

app.listen(process.env.port,()=>{
    console.log('Server is upp and running',port);
})

console.log('chai aur code');