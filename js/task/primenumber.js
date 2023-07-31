function prime(n)
{
    let count=0;
    for(let i=2;i<=n;i++){
        if(n%i==0){
            count++;
            console.log("It is not a prime number")
            break;
        }
        else if (n%n==0 && n%1==0){
            console.log("It is a prime number")
            break;
        }
        else{
            console.log("not a number")
        }      
    }
}
prime(21);
    
