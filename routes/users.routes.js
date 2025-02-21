const express = require("express");

const result = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
  },
];
module.exports = (app) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      res.json({ result: data, success: "User Data get successfully" });
    } catch (error) {
      throw error;
    }
  });

  router.get("/:id", (req, res) => {
    let response = result.some((val)=>{
        if(val.id === parseInt(req.params.id)){
            res.send(val);
        }
    })
  });

  router.post('/insert',(req,res)=>{
    
  });


  app.use("/user", router);
};
