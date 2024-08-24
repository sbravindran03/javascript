try{
    const a=20/0;
    console.log(a);

}
catch(error){
    console.log('error message',error.message);

}
finally{
    console.log("this is Always runs");
}