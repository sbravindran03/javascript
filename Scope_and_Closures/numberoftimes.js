// Write a function that creates a closure to keep track of the number of times a function has been called.
// Use a closure to remember the previous result of a calculation.
function createnumber(){
num =0;
return function(){
    num++;
    return num;
}

}
let numberof=createnumber();
console.log(numberof());
console.log(numberof());
console.log(numberof());