//5. Print today’s date in following format 27-06-23


//creating a object for date 
let date = new Date();
// console.log(date);

//to get the date 
let tdate= date.getDate();

console.log(tdate);
//to get the month

let month=date.getMonth()+1;
//to print with before 0

if(month<10)
month="0"+month;
console.log(month);

// to get the year
let year=date.getFullYear(); 
let a=year;
let d=a.toString().split("");
console.log(d)
console.log(d[2]+d[3]);

// let arr='';
// //console.log(d);

// for (let i=0; i<d.length; i++)
// {
//     if(i==2 || i==3)
//     {
//       (arr += d[i]);
//     }
// }

// console.log(arr);

// console.log(tdate+"-"+month+"-"+arr);






//('${tdate}/${month}/${year}')
// let splitNum=a.split("");
// console.log(splitNum);

// console.log(typeof(a));

//let c=year.slice(2)
//console.log(c);















// for(let i=0;i<=d.length-1;i++)
// {
// if(d[i]!=2)
// {
//     arr=
//     arr=d[i];
//     console.log(arr)
    
// }else if(d[i]==2 && d[i]==1)
// {

//   arr=d[i+2]+d[i+3];
//   console.log(arr)
//   break;
// }
// }







// console.log(tdate+"-"+month+"-"+(year))