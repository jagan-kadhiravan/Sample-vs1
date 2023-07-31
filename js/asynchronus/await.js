function java()
{
  setTimeout(()=>{
    console.log(" menu page is clicked")

  },3000)
}
function first(){
    setTimeout(()=>{
        console.log("First page clicked");
    
    },5000)
}
 
function next(){
    setTimeout(()=>{
        console.log("program ended");
    },4000)
}

async function check(){
     first();
    await next();
}
check();