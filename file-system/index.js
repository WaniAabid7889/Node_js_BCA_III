const fsPromise = require('fs').promises;
const fs = require('fs');
const path = require('path');


let appendData = "\n new student data";
let user = [
    {id:101,name:'student1',class:'node.js'},
    {id:102,name:'student2',class:'node.js'},
    {id:103,name:'student3',class:'node.js'}
];



// const http = require('http');

// http.createServer(async(req,res)=>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(8000);

// let appendData = "\n new student data";
// let user = [
//     {id:101,name:'student1',class:'node.js'},
//     {id:102,name:'student2',class:'node.js'},
//     {id:103,name:'student3',class:'node.js'}
// ];


// const fileOps = async()=>{
//     try {
//         let data = await fsPromise.readFile(path.join(__dirname,'files','student.txt'),'utf-8');
//         await fsPromise.writeFile(path.join(__dirname,'files','new_student.txt'),data);
    
//         //file delete using unlink 
//         await fsPromise.unlink(path.join(__dirname,'files','student.txt'));

//         await fsPromise.appendFile(path.join(__dirname,'files','new_student.txt'),'\n'+JSON.stringify(user));
//         let newData =  await fsPromise.readFile(path.join(__dirname,'files','new_student.txt'),'utf-8');
//         console.log(newData);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fileOps();



// fs.readFile('files/new_student.txt',{encoding:'utf-8'},(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// if(!fs.existsSync('./files'),(err)=>{

// });


let rs = fs.createReadStream(path.join(__dirname,'files','new_student.txt'),{encoding:'utf-8'});



let ws = fs.createWriteStream(path.join(__dirname,'files','student.txt'));




rs.on('data',chunkData=>{
    ws.write(chunkData);
})

// rs.pipe(ws);

console.log(rs);
//fetch user data in a student_object array object using async and await  function then print
//then store data into createFile 
