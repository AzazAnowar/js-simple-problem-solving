function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1+num2;
}

// const result = add(12,40);
const result = add(12,'40');
console.log(result);

function myltiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1*num2;
}

// const output = myltiply(12,54);
const output = myltiply(12*54);
console.log(output);