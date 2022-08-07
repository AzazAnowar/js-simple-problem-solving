// 1+2+3+4+5+6+7+8+9+10

function addNumbers(numbers){
    let sum = 0;
    for(let i= 1; i < numbers; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i < number; i++){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

let num = 10;
const addResult = addNumbers(num);
console.log("After Adding the numbers :",addResult);

const multiResult = multiplicationOfNumbers(num);
console.log("After Multiplicatin :",multiResult);