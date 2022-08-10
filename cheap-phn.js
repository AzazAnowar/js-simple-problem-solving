const phones = [
    {name: 'Samsung', camer: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camer: 10, storage: '32gb', price: 22000, color: 'black'},
    {name: 'iphone', camer: 10, storage: '32gb', price: 82000, color: 'golden'},
    {name: 'Xaomi', camer: 10, storage: '32gb', price: 52000, color: 'white'},
    {name: 'Oppo', camer: 10, storage: '32gb', price: 20000, color: 'blue'},
    {name: 'Nokia', camer: 10, storage: '32gb', price: 44000, color: 'yellow'},
    {name: 'HTC', camer: 10, storage: '32gb', price: 62000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i< phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

// check which phone color is golden

function checkColor(phones, phnColor){
    let color = phnColor;
    let compPhn = [0];
    let chosenPhn = [];
    for(i = 0; i<phones.length; i++){
        const phn = phones[i];
        if(phn.color === color){
            compPhn = phn;
            chosenPhn.push(compPhn);
        }
    }
    return chosenPhn;
}


const mySelection = cheapestPhone(phones);
console.log(mySelection);

const myColor = checkColor(phones, 'silver');
console.log(myColor);