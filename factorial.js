// simle way

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
        // console.log(i, result);
    }
    return result;
}

// using reverse loop

function factorialReverseLoop(number){
    let result = 1;
    for( let i = number; i >=1 ; i--){
        result = result * i;
        // console.log(i, result);
    }
    return result;
}

// using while loop

function factorialWhile(number){
    let result = 1;
    let i = 1;
    while(i <= number){
        result = result * i;
        i++;
    }
    return result;
}

// using while reverse

function factorialWhileReverse(number){
    let result = 1;
    let i = number;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

let num = 10;
console.log(`Factorial of ${num} = ${factorial(num)}`);
console.log(`Factorial of ${num} = ${factorialReverseLoop(num)}`);
console.log(`Factorial of ${num} = ${factorialWhile(num)}`);
console.log(`Factorial of ${num} = ${factorialWhileReverse(num)}`);