//3. Check whether a string contains a substring. 
// * 		Ex1: Consider the string ‘I am doing my internship program’. Here string ‘internship’ is present, so function should return true.
// * 		Ex2: Consider ‘Hello world’, it is not having ‘internship’ , now function should return false


let str="I am doing my internship program";
let a=str.split(" ");
console.log(a)
let str1="jagan";
let b=false;
console.log(str1.toString());
for(let i=0;i<=a.length;i++)
{
if(a[i]==str1){
b=true;
break;
}
}

if(b)
{
    console.log("The string"+" "+ str1 +" is present in the given string");
}
else 
{
  console.log("The string"+" "+ str1 +" is not present in the given string")
}
