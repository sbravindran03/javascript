// Task 3: Array Methods Task
// Create an array of numbers. Use the map() method to square each number, the filter() method to keep only numbers greater than 10, and the reduce() method to sum up all the remaining numbers.

const numbers=[1,3,32341,24,3131,4,2234,4511,332,2234,313344];
const square=numbers.map(num=>num*num);
const greater=numbers.filter(num=>num>10);
const reduce=numbers.filter((accumlator,currentvalue)=>{
    return accumlator+currentvalue;

},0);
console.log(reduce);
console.log(square);
console.log(greater);