class Employee{
    //syntax 1
    // empNo : number;
    // empName : string;
    // salary :number;
    
    // constructor(eno : number,ename:string,esal:number){
    //     this.empNo = eno;
    //     this.empName = ename;
    //     this.salary = esal;
    //}
    
    //syntax2 
    constructor(public empNo:number, 
        public empName:string, 
        public salary:number){
    }

    dispaly (){
        console.log ("empNo" + this.empNo, "empName" + this.empName, "salary" +this.salary);
    }
}

let obj = new Employee(101,'Hanumesh', 1500000000);
    obj.dispaly();

class Manager extends Employee{
    allowances : number;
    constructor(a:number){
        super(101, 'super', 1500000);
        this.allowances = a;
    }
    showAllowances(){
        console.log ('showallaances',this.allowances);
    } 
}

let mgr = new Manager(10);
    mgr.showAllowances