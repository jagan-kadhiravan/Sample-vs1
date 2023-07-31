//3. Duplicate an array 
// Ex: function test([1,2,3,4,5])
// Should return [1,2,3,4,5,1,2,3,4,5]


function Duplicate(arr)
{
   let d=arr.slice();//[ 1, 2, 3, 4, 5 ]
    console.log(d)
    arr=arr.concat(d);
    console.log(arr)
}
let arr1=[1,2,3,4,5]
Duplicate(arr1)

