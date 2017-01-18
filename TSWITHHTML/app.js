var Employee = (function () {
    function Employee(eno, ename) {
        this.eno = eno;
        this.ename = ename;
    }
    return Employee;
}());
var EmployeeDal = (function () {
    function EmployeeDal() {
        this.Emps = new Array();
        this.Emps.push(new Employee(1, 'A'));
        this.Emps.push(new Employee(2, 'B'));
    }
    EmployeeDal.prototype.display = function (eno, ename) {
        this.Emps.push(new Employee(eno, ename));
        alert('result ' + this.Emps.length);
    };
    return EmployeeDal;
}());
