

export interface Product{
    description: string;
    price: number;
}

const phone:Product ={
    description:'Nokia A1',
    price:150.0
}

const tablet:Product ={
    description:'ipad air',
    price:300.0
}

interface TaxCalculationOption{
    tax: number;
    products: Product[];
}

//function taxCalculator(option:TaxCalculationOption):[number,number]{
//function taxCalculator({tax,products}:TaxCalculationOption):[number,number]{
   export function taxCalculator(options:TaxCalculationOption):[number,number]{

        const{tax, products}=options
    let total =0;

    products.forEach(({price})=>{
        total+= price;
    });

    return[total,total* tax];


}




// const shoppingCart = [phone,tablet];
// const tax= 0.15


// const [total, Taxtotal] = taxCalculator({
//    products:shoppingCart,
//     tax:tax,
//  });

// console.log(`total:${total}`)
// console.log(`tax:${Taxtotal}`);


//export{}