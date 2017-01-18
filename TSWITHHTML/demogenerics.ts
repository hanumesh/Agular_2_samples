class Stack<T>{
    arr : T[]     // generic field property 
    constructor(){
        this.arr = new Array(5);
    }
    // generic function with input parameter
    push(item :T){
        this.arr.push(item);
    }
    // generic function with input parameter
    pop():T{
        return this.arr.pop();
    }
    listdata():T[]{
        return this.arr;
    }
}

let stkInt = new Stack<number>();
stkInt.push(10);
stkInt.push(20);
stkInt.push(30);
stkInt.push(40);
stkInt.push(50);

// let val = stkInt.pop();
// console.log ('poped value' + val);

 let arrayData = stkInt.listdata();

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

arrayData.forEach(x=>{
    console.log (x);
})