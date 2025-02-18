const express = require('express');
const port = 3004;
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
  res.send("welcome to express js ");
})

app.put('/update/:id?',(req,res)=>{
    let id = req.params.id;
    let data = req.body;
    console.log(id);
    console.log(data);
    res.json({success:true,result: data, message:"Record is updated"});
})

app.delete('/delete/:id?',(req,res)=>{
   res.status(200).json({success:true, message:"record is deleted"});
})


app.listen(port);