let string = "devipriya";
let reverseStr='';
let i;
 
for( i=string.length-1;i>0;i--)
{
    if(string!=undefined)
    reverseStr=reverseStr+string[i];

}

if(reverseStr===string)
{
    console.log("It is palindrome");
}
else{
    console.log(string+ " " +"It is not a palindrome")
}  




// let reverse='';
// let string="jagan";
// let i=string.length-1;

// while(string[i]!=undefined){
//     reverse+=string[i];
//      i--;

// }
// if(string==reverse){
//     console.log(reverse);
//     console.log("It is a palindrome")
// }else{
//     console.log("It is not a palindrome")
// }



// let string="jaganathan";
// let b=string.reverse();
// console.log(b);

