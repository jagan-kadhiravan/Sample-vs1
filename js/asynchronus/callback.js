
// let stocks={
//     Fruits:["apple","banana","orange"],
//     liquid:["water","ice"],
//     holder:["cone","cup"]
// };

// let order=(fruit_name,callback)=>{
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[fruit_name[fruit_name]]} was selected`)
//         production();
//     },2000)
// }
//  let production=()=>{
//     setTimeout(()=>{
//         console.log("liquid is used");
//         setTimeout(()=>{
//             console.log(`${stocks.holder[1]} was selected`)
//         },2000)
//     },4000)
//      console.log("production has started")
// }

// order();



console.log("page login")

// java(("jagan") ,() =>{
//       console.log(names);
// });

function java()
{
  setTimeout(()=>{
    console.log(" menu page is clicked")

  },3000)
}
function first(callback){
    setTimeout(()=>{
        console.log("First page clicked");
        callback();
    },5000)
}
 
function next(){
    setTimeout(()=>{
        console.log("program ended");
    },4000)
}

first(java);

