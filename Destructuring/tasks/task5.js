// Rest Operator: Write a function that takes any number of arguments, uses the rest operator to collect them into an array, and returns their product.
function add(...sum){
    return sum.reduce((acc,num)=>acc+num)
}
console.log(add(1,23,4455,554));