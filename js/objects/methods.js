let student=
{
    stdname:"jagan",
    stdid:17,
    stdrollnumber:1718,
    tenthmark:490,
    scholership:function(mark){
              
        if(this.tenthmark<=mark){
            console.log("college fees is free")
           // return this.tenthmark;;
        
        }
        else{
            console.log("Need to pay a fee")
        }
        

          //console.log(student.scholership());
       
    }
}
//console.log(student);
//student.scholership(490);
student["scholership"](490);
