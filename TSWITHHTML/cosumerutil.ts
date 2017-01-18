import{mathUtil} from './utilities'

class consumer {
    dispalyResult (){
        let math = new mathUtil();
        console.log (math.add(1,2))
        console.log (math.sub(1,2))     
    }
}

let obj = new consumer()
obj.dispalyResult();
