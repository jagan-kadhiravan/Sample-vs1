// function fa(n){
// let a=1;
// if(n>0)
// {
//     for(let i=1;i<=n;i++){
//         a*=i;
//         //console.log(a)
//     }
//     console.log(a)
// }
// }
// fa(5)



//sum of first 10 integers


// function fa(n){
//     let a=0;
//     if(n>0)
//     {
//         for(let i=0;i<=n;i++){
//             a+=i;
//             //console.log(a)
//         }
//         console.log(a)
//     }
// }
    
// fa(5)
    
    //reursion function
function fa(n){
    //let a=0;
    if(n==1)
       return 1;
       return n+ fa(n-1);
}
console.log(fa(1))

    

// let num=5;
// let a=1;
// for(let i=1;i<=num;i++){
//     a=a*i;
// }
// console.log(a)


var person = {
    firstName: "Elon",
    lastName: "Musk",
    age: 25,
    address: {
        id: 1,
        country: "UK"  
    }
}
//updating id
person.address.id=2;//output id:2
console.log(person)