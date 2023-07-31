// let i = "HELLOW";
//          console.log(i);

//         if(i=="HELLOW")
//         {
//             console.log("Hi displayed");

//         }
//         else{
//             console.log("not");
//         }

//********* */
// let x=100;
// console.log(typeof(x));

let name = "jagan";
console.log(typeof name);

// // // const a=1;
// // // const b=1;
// // // var c=a+b;

// // // c+=a;
// // // console.log(c)

// // // let a
// // // console.log(typeof(a));

// // //console.log(a);

// // let binaryValue = '1010';
// // let decimalValue = parseInt(binaryValue, 2);
// // console.log(binaryValue);
// // console.log(decimalValue); // Output: 10

// // let num=[3,3,5,6,32,6,7];
// // num.sort((a,b)=>a-b)
// // console.log(num);

// // a=1;
// // b=2;
// // c=34;
// // d=54;
// // e=23;

// // let arr=[a,b,c,d,e]

// // console.log(arr.sort((x,y)=>x-y))
// // console.log(arr[(arr.length)-1]);
// // console.log(arr.length);

// // var y = 1;
// // function foo() {
// //     let x = 2;
// //     let y = 2;
// //     function bar() {
// //        let y = 3;
// //       console.log(x);
// //       console.log(y);
// //     }
// //     bar();
// //     console.log(x); //

// //   }
// //   foo();
// //   console.log(x);
// //   console.log(y); //

// var x = 0; // Declares x within file scope, then assigns it a value of 0.
// var y=9;
// var z=7;
// //console.log(typeof z); // "undefined", since z doesn't exist yet

// function a() {
//   var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

//   console.log(x, y); // 0 2

//   function b() {
//     x = 3; // Assigns 3 to existing file scoped x.
//     y = 4; // Assigns 4 to existing outer y.
//     z = 5; // Creates a new global variable z, and assigns it a value of 5.
//     // (Throws a ReferenceError in strict mode.)
//   }

//   b(); // Creates z as a global variable.
//   console.log(x, y, z); // 3 4 5
// }

// a(); // Also calls b.
// console.log(x, z); // 3 5
// console.log(z); // "undefined", as y is local to function a
// Let num;
// Let a1;
// for(let I=1;I<=num;i++)
// {
// a=a*I;
// Console.log(a)
// }

// let num=5;
// let a=1;
// for(let i=1;i<=num;i++)
// {
// a=a*i;

// }
// console.log(a);

//invoke function
// (()=>{
//     console.log("hi");
// })();

// let a ="jag an";
// let b="j k";
// let d=(a.replaceAll(' ',"").split());
// let c=(b.replace(/\s/g,''));
// //console.log(c.split());
// console.log(d.concat(c));

// console.log("run");
// console.log(call())

// function call(){
//     setTimeout(()=>{
//        return (a="wait")
//     },2000);

// }
// console.log("stop");

// console.log("jagan");
// console.lo("hi");
// console.log("jahan")

let a = "1967";
console.log(a.indexOf(9));
