// Write a function that calculates the factorial of a number (e.g., factorial(5) returns 120).

let a=5;
function factorial(a){
    if(a==0){
        return 1;
    }
    else{
        return a*factorial(a-1)
    }
   
}
console.log(factorial(a));