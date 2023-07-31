
let a=10;
let b=10;
let c=30;
let sec=1;
switch(sec==1){
    case((a>b && a<c ) || (a<b && a>c)|| (b==c && a<b)):console.log("a is the second largest number");break;
    case((b>a && b<c) || (b<a && b>c) || ( a==c && b<a)):console.log("b is the second largest number");break;
    case((c>a && c<b) || (c<a && c>b) || ( a==b && c<b)):console.log("c is the second largest number"); break;
    case((a==b && a<c && b<c)):console.log("a and b is the second largest number");break;
    case(b==c && b<a && c<a):console.log("b and c is the second largest number");break;
    case(c==a && c<b && a<b):console.log("c and a is the second lagest number");break;
}

