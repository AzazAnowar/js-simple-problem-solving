const numbers = [45,56,23,98,19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'xiami phone one night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'samsung phone note 7', price: 19000},
    {id: 7, name: 'Nokin old age phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000},
    {id: 8, name: 'Phone Two', price: 19000},
    {id: 9, name: 'walton phone', price: 19000},
    {id: 10, name: 'M1 chip not cheap Laptop', price: 19000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProduct(products, search){

    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProduct(products, 'phone');
const result2 = matchedProduct(products, 'laptop');
console.log(result);
console.log(result2);