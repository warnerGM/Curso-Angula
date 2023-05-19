


function addNumber(a: number,b:number){
return a+b;

}
 
const addNumberArrow =(a:number,b:number):string =>{
return`${a+b}`;
}

function multiply(firstN:number,second?:number,base:number=2){
return firstN*base;
}

const result:number= addNumber(1,3);
const result2:number= addNumber(6,3);
const multiplyR:number=multiply(8);

console.log({result,result2,multiplyR})



export{}