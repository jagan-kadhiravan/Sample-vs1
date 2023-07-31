// 



function java()
{
  setTimeout(()=>{
    console.log(" menu page is clicked")
    // first();
    // next();

  },6000)
}
function first()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("First page clicked");
            const error=false;
            if(false)
            {
                resolve();
            }
            else{
            reject("Error:somehting went wrong");
            }
            //callback();
            
        },7000);
    });
}

 
function next(){
    setTimeout(()=>{
        console.log("program ended");
    },2000)
}

java();
first()
.then(next)
.catch(err => console.log(err));
