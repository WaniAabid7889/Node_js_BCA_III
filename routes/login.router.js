const express = require('express');
module.exports = (app) =>{
    var router = express.Router();
    // console.log('router=>',router);

    router.post('/login',(req,res)=>{

    });

    router.get('/fetch',(req,res)=>{

    });

    router.get('/getById/:id',(req,res)=>{

    });

    router.post('/insert',(req,res)=>{

    });

    router.put('/update/:id',(req,res)=>{

    });

    router.put('/delete/:id',(req,res)=>{

    });

   app.use('/api/v1/user', router);

    //http://localhost:3002/user/login //method post  //body -> req.body , req.params.id, req.query
    //http://localhost:3002/user/fetch // method get 
    //http://localhost:3002/user/getById/101 // method get / req.params.id
    //http://localhost:3002/user/insert // method post //req.body
    //http://localhost:3002/user/update/102 // method put // req.query, req.body
    //http://localhost:3002/user/delete/102 // method delete // req.params.id 
}