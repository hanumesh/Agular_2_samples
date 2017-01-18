console.log ("Wecloming Typescript");

function add(x,y){
    return x+y;
}

console.log ('Add' + add(10,11));

var Emp =[
    {EmpNo : 1 , EmpName : 'A'},
    {EmpNo : 2 , EmpName : 'B'},
    {EmpNo : 3 , EmpName : 'C'}
]

console.log ("EMP" , Emp);

function check(x){
    let d : number;        
        d=0;
    if (x){
        d = 10;
        return d;
    }
    return d;
}
console.log('True x ' + check(true));
console.log('False x ' + check(false));