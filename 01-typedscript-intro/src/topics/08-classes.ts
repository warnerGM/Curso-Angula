

export class Person{
    // public name: string 
    // private address: string

    constructor(
        public Firstname:string, 
        public Lastname:string, 
        private address: string ='no adrrss'
        ){ }
}

// export class hero extends person{
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName: string,
//     ){
//         super(realName,'tenesy');
//     }
// }

export class hero {

    //public person:Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
        public person:Person,
    ){
    // this.person = new Person(realName);

    }
}

const banner =new Person('banner','doctor','boston');

const hulk = new hero('hulk',34,'baner',banner);

console.log(hulk)