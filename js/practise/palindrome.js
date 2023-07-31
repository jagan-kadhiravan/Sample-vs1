//4. Check given string palindrome Ex: ‘Rats live on no evil star’ - palindrome
// * 		Ex: ‘Hello world’ - not palindrome ’



let str="Rats live on no evil star";
let str1=" ";
//let a=str.toLowerCase();
for(let i=str.length-1;i>=0;i--){
    if(str[i]!==undefined)
    str1=str1+str.charAt(i);
   // console.log(str1)
   //;
}
//console.log(str1);
let a=str.toLowerCase();
//console.log(a);
let b=str.toLowerCase();
//console.log(b);

if(a===b){
    console.log("The given string is palindrome")
}
else{
    console.log("the given string is not a palindrome")
}