
// 2. Given a string reverse each word in a string 
// ‘Welcome to this Javascript World’
// Should return ‘emocleW ot siht tpircsavaJ dlroW’



// let str="Welcome to this Javascript World";
// //console.log(str.length,str)
// let arr=str.split(' ');//[ 'Welcome', 'to', 'this', 'Javascript', 'World' ]
// let arr1;
// let arr2;
// let a='';
// for(let i=0;i<=arr.length-1;i++)
// {
//     arr1=arr[i].split('');
//     //console.log(arr1);
//     arr2=arr1.reverse();
//     //console.log(arr2)
//     arr2=arr1.join('');
//     //console.log(arr2)
//      a+=arr2+' ';
// }
// console.log(a);

let revStr;
function check(str){
      revStr= str.split(" ").reverse().join(" ").split("").reverse().join("");
}
check("Welcome to this Javascript World")
console.log(revStr)
//‘emocleW ot siht tpircsavaJ dlroW’



// let str ="Hi jagan welcome to mac";

// //console.log(str.split(" ").reverse().join().split());//0 index: output [ 'Hi jagan welcome to mac' ]

// console.log(str.split(" ").join("*"));// ['Hi', 'jagan', 'welcome', 'to', 'mac']





















// console.log(str.length); // count for 1 
 //console.log(str.trim());//  remove start and end white space
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.indexOf("a")); // count from 0
// console.log(str.slice(0,1));
// console.log(str.slice(1,3));
// console.log(str.slice(5));
// console.log(str.replace("Hero", "Super Hero"));
// console.log(str.repeat(10));




// let color = ['red' , 'blue', 'green', 'orange', 'yellow', 'purple'];
// console.log(color);
// console.log(color.splice(0,2), color);
// console.log(color.splice(3, 0, "peach", "gray"), color);
// console.log(color.splice(-3, 2), color);