class student{
    constructor(){
        let name,id;

    }
    getname()
    {
        return this.Name;
    }
    setname(name)
    {
        this.Name=name;

    }
    getid()
     {
        return this.ID;
    }
    setid(id){
        this.ID=id;
    }

}

let stu=new student();
stu.setname("jagan");
stu.setid(17);
console.log(stu.getname(),stu.getid());
