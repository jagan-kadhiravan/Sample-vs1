let arr = [1, 2, 3, 6, 8, 9, 5, 0, 7];

//let arr1=[0,1,2,3,4,5,6,7,8,9]
let arr1 = arr.sort((a, b) => a - b);
// console.log(arr); //arrays are mutable.
// console.log(arr1);
let b;
let c;
for (let i = 0; i <= arr1.length - 1; i++) {
  b = arr1[i + 1] - arr1[i];
  if (b !== 1) {
    c = arr1[i] + 1;
    console.log("missing number" + c);
  }
}
