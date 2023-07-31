//hosting
//variables and function declarations are moved to their respective scopes during compilation phase.

//var hosting
console.log(a);// output=undefined
var a="jagan";
console.log(a);



//function hosting

// check();
// function check(){
//     console.log("hellow");
// }




//(anonymous functions assigned to variables) are not hoisted.

check();//output= check is not defined
var a= function check(){
    console.log("hellow")
}