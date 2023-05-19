
import{ Product,taxCalculator}from'./06-function-destructuring';

const shoppingCart:Product[]=[
    {
    description:'Nokia',
    price:100
    },

    {
        description:'tablet',
        price:300
        }
];



//Tax = 0.15

const [total,tax] =taxCalculator({
    products:shoppingCart,
    tax:0.15
});

console.log(`total:${total}`)
console.log(`tax:${tax}`)