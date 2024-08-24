// Write a function that performs a division of two numbers. If the denominator is 0, throw an error. Use try and catch to handle this error and log an appropriate message.
function divide(numerator,dinominator){
    if(numerator===0){
        throw new Error("canot diviode by zero");
    }
    else{
        return numerator/dinominator;
    }


}
try{
    const result=divide(20,0);
    console.log(result);
}
catch(error){
    console.log("error message",error.message);

}