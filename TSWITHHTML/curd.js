var Stackcurd = (function () {
    function Stackcurd() {
        this.arr = new Array(5);
    }
    // generic function with input parameter
    Stackcurd.prototype.push = function (item) {
        this.arr.push(item);
    };
    // generic function with input parameter
    Stackcurd.prototype.pop = function () {
        return this.arr.pop();
    };
    Stackcurd.prototype.listdata = function () {
        return this.arr;
    };
    return Stackcurd;
}());
function identity(arg) {
    console.log(arg);
    return arg;
}
var Employee1 = (function () {
    function Employee1(eno, ename) {
        this.eno = eno;
        this.ename = ename;
    }
    return Employee1;
}());
var EmployeeDal1 = (function () {
    function EmployeeDal1() {
        this.Emps = new Array();
        this.Emps.push(new Employee1(1, 'A'));
        this.Emps.push(new Employee1(2, 'B'));
    }
    EmployeeDal1.prototype.display = function (eno, ename) {
        this.Emps.push(new Employee1(eno, ename));
        alert(this.Emps);
    };
    return EmployeeDal1;
}());
