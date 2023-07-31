
//************ flags */
const text= 'hi jagan hi';
 const regex1 = /hi/dg;

// //hasindices using d 

 console.log(regex1.exec(text).indices[0]);
 


//g is a global serach 
// const text= 'hi jagan hi';
// //console.log(text.replace(/a/g,"i"));
// console.log(text.replaceAll("a","i"));


//i is ignore case 
// const text= 'hi jagan hi';
// const pattern =/j/i;
// console.log(text.match(pattern));

//flags
// const isMatch=pattern.test(text);
// console.log(isMatch);//output true


//m multiline
// const name= "jagan";
// const empnum=17;
//   const multiline='Hi,${name} your employee ${17}'


//Match()

// const a="jagan";
// const b="jagan";
// console.log(a.match(b));


//search()

// let str="jaganathan jagan";
// const pattern="jagan";
// const ind=str.search(pattern);
// console.log(ind);


 
// const str = "Hello, world!";
// const pattern = /world/i;

// const result = str.match(pattern);
// console.log(result);
