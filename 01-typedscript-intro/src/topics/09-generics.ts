

export function whatsMyType<T>(argument:T){


    return argument
}


const amIString = whatsMyType<string>('hello world')
const amINumber = whatsMyType<number>(100)
const amIArray = whatsMyType<number[]>([1,2,3,4,5])


console.log(amIString.split(''))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))