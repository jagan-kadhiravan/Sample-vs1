class student{


    //constructor
    constructor(name,id,rollnum){
        this.stdname=name;
        this.stdid=id;
        this.stdrollnum=rollnum;
    }
    // setdetailes(name,id,rollnum){
    //     this.stdname=name;
    //     this.stdid=id;
    //     this.stdrollnum=rollnum;
    // } 
    display(){
        console.log(this.stdname,this.stdid,this.stdrollnum);
    }
}
let stu=new student("jagan",1,17);//using constructor we no need to call that automatically invoke
//stu.setdetailes("jagan",1,17);
stu.display();