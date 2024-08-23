function Createcounter(){
    let count  =0;
return function(){
    count++;
    return count;

}


}
const counter =Createcounter();
console.log(counter());
console.log(counter());
console.log(counter());