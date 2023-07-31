// throw "Error2"; // String type
// throw 42; // Number type
// throw true; // Boolean type
// throw {
//   toString() {
//     return "I'm an object!"; 
//   },
// };s

let a=2;
let b=2;
let c=0;
try{
function add(a,b){
    if(c==0 && b>0)
    {
        return a+b;
    }
    else
    {
        throw new Error("change the value");
    }  
}
//add(2,0);
console.log(add(2,2));
}
catch(error1){
console.error("The message :  "+ error1.message);
} 
finally{
    console.log("The program closed")
}