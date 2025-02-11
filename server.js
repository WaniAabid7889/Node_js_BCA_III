const express = require("express");
const app = express();
const path = require("path");
const port = 3004;

// app.get('/',(req,res)=>{
//     res.send(`${req.method}  ${req.url}`);
// })

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "about.html"));
});

app.get(
  "/hello",
  (req, res, next) => {
    console.log("we are handle middleware hello.html");
    //next middleware
    next();
    console.log("completed our work");
  },
  (req, res) => {
    console.log("this is middleware");
    res.sendFile(path.join(__dirname, "view", "hello.html"));
  }
);

let user = {
  id: 101,
  name: "user1",
  post: "undefined",
};

let userData = [
  {
    id: 101,
    name: "user1",
    post: "imran",
  },
  {
    id: 102,
    name: "user2",
    post: "faizan",
  },
  {
    id: 103,
    name: "user3",
    post: "asif",
  },
];

app.get(
  "/fetchUser",
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.json({ userData: user });
    return user;
  }
);

const user1 = (req, res, next) => {
  console.log("fetch user one data");
  console.log(userData[0]);
  next();
};
const user2 = (req, res, next) => {
  console.log("fetch user two data");
  console.log(userData[1]);
  next();
};

const user3 = (req, res, next) => {
  console.log("fetch user three data");
  console.log(userData[2]);
  res.send(userData);
};

app.get("/chain", [user1, user2, user3]);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(port, () => {
  console.log(`this server is running for http://localhost:${port}`);
});
