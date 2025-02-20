let arr=[1,2,3,4,5];


//map,foreach,filter,reduce,

let users = [
    {id:101,name:"user1",password:"user1@123",salary:3000},
    {id:102,name:"user2",password:"user1@123",salary:4000},
    {id:103,name:"user3",password:"user1@123",salary:2000},
    {id:104,name:"user4",password:"user1@123",salary:1000},
]

let user1 = [{id:104,name:"user4",password:"user1@123",salary:1000}];

// let res = arr.forEach((element)=>{
//     console.log(element)
//     return element
// })
// console.log(res);


// users.forEach((element=> console.log(element)));

// arr.map((val,index)=>{
//     console.log(val)
// })

let number= [1,2,3,4,5,6];


let data =  number.map((val,key,array)=>{
    if(key==0){
        return {val,array}
    }
})

// console.table(data)

let filterArray =  number.filter((val,key,array)=>{
    return val % 2=== 0
})
console.log(filterArray);


// reduce

let numbers = ['1','2','3','4','5'];

let totalNumber= numbers.map(Number).reduce((total,val)=> total+val);

console.log(totalNumber);