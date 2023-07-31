class demo1{
    static a=10;
    b=20;
    frist()
    {
        console.log("Hi");
    }
   static second()
   {
    console.log("Hello");
   } 
}
//We can directly access the variables and methods using static by class name                    
console.log(demo1.a);

//We can directly call the function when it is static keyword is used
demo1.second();

//demo1.frist();//incorrect way of calling method

//non-static variables and methods are called only creation of objects
let a =new demo1;
a.frist();