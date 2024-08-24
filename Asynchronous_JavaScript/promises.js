const mypromise =new Promise((resolve,reject)=>{
 const sucess=true;
 if(sucess){
    resolve("operation sucess");
 }
 else{
    reject("operation failed");
 }
});
mypromise
.then(result=>{
    console.log(result);

})
.catch(error=>{
    console.log(error);
});