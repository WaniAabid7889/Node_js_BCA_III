const userData = (status) => {
  return new Promise((res, rej) => {
    if(status){
      
      setTimeout(() => {
        res({ statueCode: "Created", message: "Record is Created Successfully" });
      }, 3000);
      
    }else{
      rej("our record is not created ")
    }
  })    
};

// let status = true;
let result = userData(true);
result.then((data) => console.log(data)).catch((err =>console.log(err)));

