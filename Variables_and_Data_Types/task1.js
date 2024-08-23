// Create a variable for each data type (String, Number, Boolean, Array, Object, Null, Undefined).
// Print each variable's value and its type using typeof.
// Modify the string by concatenating another string and log the new string.
// Perform some basic arithmetic with the number variable and log the result.
// Access a value from the array and the object and log them.
let string ="rsv";
let number=24;
let Boolean =true;
let a=[1,2,3];
let rsv ={
    name:"ravi",
    age: 21
}
let hawkeye=null;
let falcon =undefined;
let notAssinged;
console.log(string,typeof string);
console.log(number,typeof number);
console.log(a,typeof a);
console.log(rsv, typeof rsv);
console.log(hawkeye, typeof hawkeye);
console.log(falcon, typeof falcon);
string +=" -ravi,shyam,panda";
console.log(string);
number+=4;
console.log(number);
console.log(a[1]);
console.log(rsv.age,rsv.name);

