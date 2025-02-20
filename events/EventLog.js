const fs = require('fs'); 
const fsPromise = require('fs').promises;
const path = require('path');
const {format} = require('date-fns');

let date =format(new Date(), "yyyy/MM/dd\thh:mm:ss");
console.log(date);

const EventLogs = async(msg)=>{
    let logItem = `Current Date : ${date} Message : ${msg}\n`;
    if(!fs.existsSync(path.join(__dirname,'logs'))){
        await fsPromise.mkdir(path.join(__dirname,'logs'));
    }
    await fsPromise.appendFile(path.join(__dirname,'logs','LogEvent.txt'),logItem);
}

// EventLogs('log Event Created!');

module.exports = EventLogs;
