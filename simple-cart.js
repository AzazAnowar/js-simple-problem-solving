/*
1. calculate total cost only price
2. calculate total cost with quantity
3. seperate chosen items 
 */
const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'psnt', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 3}
];

// calculate total price
function totalPriceOfShoppingCart(cart){
    let totalCartPrice = 0;
    for(let i = 0; i < cart.length; i++){
        let itemPrice = cart[i].price;
        // console.log(item);
        totalCartPrice = totalCartPrice + itemPrice;
    }
    return totalCartPrice;
}

// showing choosen items
function chosenItems(cart){
    let allItems = [];
    for(let i = 0; i < cart.length; i++){
        allItems.push(cart[i].name);
    }
    return allItems;
}

// calculate total price with quantity
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + (product.price * product.quantity);
    }
    return sum;
}


const items = chosenItems(shoppingCart);
console.log('Your cHoosen Items : ',items.toString());

const expense = totalPriceOfShoppingCart(shoppingCart);
console.log('Total expence today : ',expense,'tk');

const totalExpences = totalCost(shoppingCart);
console.log('Total Priec :',totalExpences,'tk');