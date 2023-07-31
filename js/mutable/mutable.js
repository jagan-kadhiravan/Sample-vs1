
//Object are mutable
// let student={
//     stuname:"jagan",
//     stdrollnumber:17,
//     stdid:18
// };
// let employee=student;
// //let employee=Object.assign({},student);//using this we can change the mutable to immutable
// //add the student object
// employee["std10thmark"]=470;

// //update
// employee["stdid"]=1718;
// console.log(student);
// console.log(employee);


// let a=["jagan","jk"];
// //let b=["sk","kk"]
// b=a;
// b.push("jook");
// console.log(a);
// console.log(b);


//array are mutable

let student=["jagan",12,true]
let employee=student;
//let employee=student.concat();//We can change mutable to immutable

// //push

console.log(employee.push("22.2","55","66","77"));//return the length of the array
employee.pop()//value
employee.shift()//value
console.log(employee.unshift("jagggu"))
console.log(student)
console.log(employee)


// //index value
// console.log(employee[2]);

// //update the value using index
// employee[1]='sk';

// //adding a value using index
// employee[4]="Jk";

//delete the value using index
delete employee[4];

// console.log(student);
 console.log(employee);



//we can change to immutable using ... rest operator