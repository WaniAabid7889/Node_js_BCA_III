// what is server ?
const http = require("http");
const { json } = require("stream/consumers");
const url = require('url');

// const http = require('node:http');
// const http2 = require('http2');
// console.log(http2)

// console.log(http);

// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Context-Type':'application/json'});
//     res.write("this is server");
//     res.end();
// })

// let server = http.createServer(async (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write(`
//         <html lang="en">
//         <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//         </head>
//         <body>
//         <h1>Hello world</h1>
//         </body>
//         </html>
//         `);
//   res.end();
// });


// let server = http.createServer((req,res)=>{
//     res.writeHead(300,{'Context-Type':'text/html'})
//     res.write(JSON.stringify({"id":101,"name": "abid"}));
//     res.end();
// })

// let server = http.createServer((req,res)=>{
//     var q = url.parse(req.url, true).query;
//     var txt = q.id + " " + q.name + " "+q.address;
//     res.write(JSON.stringify(txt));
//     res.end();
// })


let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
   
    let data = '';
    req.on('data',d=>{
        data += d
    });
    req.on('end',()=>{
        res.end(data);
    });
})

let port = 8000;
server.listen(port,()=>{
    console.log(`our server is running http://localhost:${port}`)
})
