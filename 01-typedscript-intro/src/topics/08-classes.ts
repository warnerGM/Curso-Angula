

export class person{
    // public name: string 
    // private address: string

    constructor(
        public name:string, 
        private address: string ='no adrrss'
        ){ }
}

export class hero extends person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
    ){
        super(realName,'tenesy');
    }
}

const hulk = new hero('hulk',34,'baner');

console.log(hulk)