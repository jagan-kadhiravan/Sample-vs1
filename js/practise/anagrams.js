// 4. Check given 2 strings are anagrams 
// Ex: Mary and army are anagrams


// let str="mary";
// let str1="army"

// let strc=str.split('');
// console.log(strc)

// let str1c=str1.split('');
// console.log(str1c);

// if(strc[i]==strc1[i]){
//     return false;
// }
// for(let i=0;i<=strc.length-1;i++)
// {
//     if(strc[i]=)

// }



let str="mary";
let str1="yram "

let a=str.toLowerCase().replace(/\s/g, '').split('');
//console.log(a);
let s=a.sort();
//console.log(s)


let a1=str1.toLowerCase().replace(/\s/g, '').split('');
//console.log(a1);
let s1=a1.sort();
//console.log(s1)
let i;

if(s[i]!=s1[i])
{
    return false;
}

    
//for(i=0;i<=s.length-1;i++){
    
    if(s[i]==s1[i]){
        console.log(str+" and " +str1+" are anagrams")
    }else{
        console.log("it is not a anagrams")
       
    }
//}












// {
// if(str.charAt(i)==str1.charAt(i)){
//     console.log("it is anagrams")
// }
// else{
//     console.log("it is not a anagarams")
// }
// i++;
// }
