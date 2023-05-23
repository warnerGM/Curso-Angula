function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
){

    return class extends constructor{
        newProperty="New property";
        hello='override';
    }
}



@classDecorator
export class SuperClass{
    public myPropety:string='abc123';

    print(){
        console.log('hello world')
    }
}


console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);