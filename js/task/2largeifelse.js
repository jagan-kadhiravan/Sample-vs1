
let a=20;
let b=30;
let c=40;

if ( (a>b && a<c)  || (a<b && a>c))
{
console.log("the second largest number is a");
}
else if ((b>a && b<c)  || (b<a && b>c))
{
console.log("the second largest number is b");
}
else if ((c>a && c<b)  || (c<a && c>b))
{
console.log("the second largest number is c");
}
else{
console.log("exception case")
}










// let a=10;
// let b=10;
// let c=20;

// if((a>b && a<c ) || (a<b && a>c)||(b==c && a<b )){
//     console.log("a is the second largest number")
// }
// else if((a==b && a<c && b<c)){
//     console.log("a and b is the second largest number")
// }
// else if((b>a && b<c) || (b<a && b>c) || ( a==c && b<a)){
//     console.log(" b is the second largest number")
// }
// else if((b==c && b<a && c<a))
// {
//     console.log("b and c is the second largest nunmber")
// }
// else if((c==a && c<b && a<b)){
//     console.log("c and a is the second largest number")
// }
// else if((c>a && c<b) || (c<a && c>b) || ( a==b && c<b))
// {
// console.log("c is the second largest number")
// }