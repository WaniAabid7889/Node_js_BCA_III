const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        console.log('User endpoint hit');
        res.send("Hello User");
    });

    router.get('/:id',(req,res)=>{
        res.send(req.params.id);
    })


    app.use('/user', router);
};