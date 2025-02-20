const express = require('express');
const port = 3004;
const app = express();
app.use(express.json());
const user = require('./routes/users.routes');
// console.log(user.getUser());
app.get('/',(req,res)=>{
  res.send("welcome to express js ");
})
app.get('/user',(req,res)=>{
  res.json({data : user.getUser() , success: true});
})
app.listen(port);