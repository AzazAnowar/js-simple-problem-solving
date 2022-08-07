// power
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

// abs 
const gap = Math.abs(num1 - num2);
console.log(gap);

if(gap < 5){
    console.log('You guyes can be friend');
}else{
    console.log('You guys stay apart');
}

// rounded

const number1 = 3.1416;
const number2 = 3.6416;
const fullNum1 = Math.round(number1);
const fullNum2 = Math.round(number2);
console.log(fullNum1);
console.log(fullNum2);

// ceil 
const result2 = Math.ceil(2.00001);
console.log(result2);

// floor
const result3 = Math.floor(2.00001);
const result4 = Math.floor(459.256);
console.log(result3);
console.log(result4);

// random

console.log(Math.random());
console.log(Math.random());

const random = Math.random()*100;
console.log(random);

const random1 = Math.round(Math.random() * 100);
console.log(random1);

for(let i = 0; i < 20; i++){
    const random1 = Math.round(Math.random() * 6);
    console.log(random1);
}