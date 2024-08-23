// Use a function declaration, expression, and arrow function to implement this.
function welcome(rsv){
return `welcome ${rsv}!`;
}
console.log(welcome);
// it is normal declaration
const greet=function(name){
    return `welcome ${name}!`;
}// Function Expression: A function is assigned to a variable. These are not hoisted, so they can only be called after they are defined.
console.log(greet);
const ravi=(billionaire)=>`hello ${billionaire}`;
console.log(ravi);//Arrow Functions (ES6): A shorter syntax for writing functions. It does not bind its own this.