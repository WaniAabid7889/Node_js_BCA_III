const express = require("express");
const app = express();
const port = process.env.PORT || 3004;


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to our application" });
});


app.get('/query',(req,res)=>{
  console.log(req.query);
  res.send(req.query);
})


app.get("/:id?", (req, res) => {
    res.send(req.params.id);
});

app.get("/query", (req, res) => {
  console.log('query string')
  res.json(req.query);
})

app.post("/insert", (req, res) => {
  let { user, email } = req.body;
  let data = req.body;
  res.send({ username: user, email: email });
  getData(data);
});

function getData(data){
    console.log(data);
}

app.listen(port);
