let arr=[1,5,1,4,3,4,4]
for(let i=2;i<=arr.length-1;i++)
{
    let a=arr[i] + arr[i-1] + arr[i-2];
    if(a===7){
        console.log("true")
        break;
    }
    else{
        console.log("there no any three consecutive elements sum to 7")
        break;
    }
}