//javascript vs nodejs


//browser javascript(windows) --> dom,event,console  
// sever (global) 

//console.log(global);

//console.log vs js console.log()


//import export nodejs(12) after  12 require();

//import export (modules js) commonjs (js)  ejs (babel)

//commonjs 



const os = require('os');
const path = require('path');

console.log(os);
// console.log(os.homedir());
// console.log(os.type());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.isAbsolute(__filename));
// console.log(path.extname(__filename));


// console.log(path.parse(__filename))


// import addition from './lib';
// const {addition} = require('./lib');
const {addition,div,mod,multiply} = require('./lib');
const operation = require('./lib');

let sum = addition(2,3);
console.log(sum);

console.log(operation.div(4,5))