// let arr=[6,5,3,1,8,7,2,4]
// let a;
// do{
//     a=false;
// for(let i=0;i<=arr.length-1;i++)
// {
//     if(arr[i]>arr[i+1])
//     {
//         let temp=arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         a=true;
//     }
// }
// }while(a)
// console.log(arr);



// do loop
// let a=false;
// do{
//     console.log("Hi")

// }while(a)



/****************function  */

function check(arr){
let a;
do{
    a=false;
for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]>arr[i+1])
    {
        let temp=arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        a=true;
    }
}

}while(a)
    return arr;

}
// check[6,5,3,1,8,7,2,4]

console.log((check([6,5,3,1,8,7,2,4])))

// function array(a){

// return a;
// }

// console.log(array([2,2,2,2]))