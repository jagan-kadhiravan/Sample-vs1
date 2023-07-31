

//to find given string have Vowels are not

// let n="e";
// // let str=n.split('');
// // let i=0;

// if(n === ("a")||("e")||("i")||("o")||("u")) {
//     console.log(n+" " +"is a vowel word")
// }
// else{
//     console.log(n+" "+"is not a vowel word")
// }


let str = "aeiou";
let str1 ="jaAanIOathan"
count =0;
for( i=0;i<=str1.length-1;i++){
    if(str.includes(str1[i].toLowerCase())){
        count++
    }

}
 console.log(count)
