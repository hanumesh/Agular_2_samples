var Stack = (function () {
    function Stack() {
        this.arr = new Array(5);
    }
    // generic function with input parameter
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    // generic function with input parameter
    Stack.prototype.pop = function () {
        return this.arr.pop();
    };
    Stack.prototype.listdata = function () {
        return this.arr;
    };
    return Stack;
}());
var stkInt = new Stack();
stkInt.push(10);
stkInt.push(20);
stkInt.push(30);
stkInt.push(40);
stkInt.push(50);
// let val = stkInt.pop();
// console.log ('poped value' + val);
// listdata is inbuilt function 
var arrayData = stkInt.listdata();
// for (let x of arrayData){
//     console.log (x);
// }
// arrayData.forEach(function(x){
//     console.log (x);    
// })
// function print (x){
//     console.log (x);
// }
// arrayData.forEach(print);
//--> using arrow functions 
arrayData.forEach(function (x) {
    console.log(x);
});
