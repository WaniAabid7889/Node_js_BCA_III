const express = require('express');
const app = express();
const path = require('path');
const port = 3004;

// app.get('/',(req,res)=>{
//     res.send(`${req.method}  ${req.url}`);
// })

app.get( '/' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'view','index.html'));
});

app.get( '/home' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'view','home.html'));
});

app.get( '/about' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'view','about.html'));
});

app.listen(port,()=>{
    console.log(`this server is running for http://localhost:${port}`)
});
