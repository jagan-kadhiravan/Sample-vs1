// let str="jagan";
// //charAt();
// console.log(str.charAt(4));//take a particular index



//Add or merge two strings
// //concat()
// console.log(str.concat("hello"));
// let a="jagan";
// let b="jk";
// let c="sk";
// console.log(a.concat(b,c));




//replaceall()
// str = "hello jagan , welcome jagan";
// console.log(str.replaceAll("jagan","jaganathan"));
// console.log(str.replaceAll(" ",""));
//console.log(str.split(" ").join(""));s
// console.log(str.join(""));



//  let assm=[14,32.12,323,4,5];
// assm.sort((a,b)=>a-b)
// // console.log(assm.split(" "));
// console.log(assm);

// let assm="hi jagan welcome to full creative"
// let ind=0
// let split="";
// while (assm[ind]!=undefined){
//     if(assm[ind]=== "l")
//     { 
//      split += assm[ind].replace("l", "k")
//     }
//     else{
//         split += assm[ind];
//     }
   
//     ind++;
// }
// console.log(split)



// console.log(assm.replace( /l/g , "k"));

//subsring
// str="jaganATHAN";
// console.log(str.substring(0,3));



// //tolowercase
// str="jaganathan"
// console.log(str.toLowerCase());



// //touppercase
// str="jaganATHAN"
// console.log(str.toUpperCase());



// //split()
// str="Hi jagan welcome to mac ai"
// let array = str.split('a');
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);


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


console.log("run");
console.log(call())

function call(){
    setTimeout(()=>{
       return (a="wait")
    },2000);

}


console.log("stop");