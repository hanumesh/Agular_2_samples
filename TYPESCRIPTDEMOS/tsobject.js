var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function () {
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
    function Employee(empNo, empName, salary) {
        this.empNo = empNo;
        this.empName = empName;
        this.salary = salary;
    }
    Employee.prototype.dispaly = function () {
        console.log("empNo" + this.empNo, "empName" + this.empName, "salary" + this.salary);
    };
    return Employee;
}());
var obj = new Employee(101, 'Hanumesh', 1500000000);
obj.dispaly();
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(a) {
        _super.call(this, 101, 'super', 1500000);
        this.allowances = a;
    }
    Manager.prototype.showAllowances = function () {
        console.log('showallaances', this.allowances);
    };
    return Manager;
}(Employee));
var mgr = new Manager(10);
mgr.showAllowances;
