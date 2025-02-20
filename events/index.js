// const EventEmitter = require('events');
// // const EventEmitter = require('node:events');

// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on('event', function firstListener(a,b, ...data) {
//   console.log(`a: ${a} b: ${b} data: ${data} `);
// });

// // Second listener
// myEmitter.on('event', function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// // // Third listener
// myEmitter.on('event', function thirdListener(...args) {
//   const parameters = args.join(', ');
//   console.log(`event with parameters ${parameters} in third listener`);
// });

// // console.log(myEmitter.listeners('event'));

// myEmitter.emit('event', 1, 2, 3,4,5);


const EventEmitter = require('events');
const EventLogs= require('./EventLog');
const myEmitter = new EventEmitter();
myEmitter.on('event',(msg)=>{
    setTimeout(()=>{
        EventLogs(msg)
    },3000);
});

myEmitter.emit('event','Log Event is Created');