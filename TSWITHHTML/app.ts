class Employee {
    constructor(public eno:number,
              public ename :string){
              }
}

class EmployeeDal{
    Emps :Array<Employee>;
    constructor(){
        this.Emps = new Array<Employee>();
        this.Emps.push(new Employee (1,'A'));
         this.Emps.push(new Employee (2,'B'));
    }

    display (eno:number,ename:string){
        this.Emps.push(new Employee(eno,ename));
        alert('result '+ this.Emps.length);
    }
}
