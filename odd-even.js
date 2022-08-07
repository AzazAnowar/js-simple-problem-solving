// checking even only

function isEven(number){
    if(number % 2 ===0){
        return true;
    }else{
        return false;
    }
}

const myNumber = 8094;
console.log(`The number I have intered is ${myNumber}. If output is true then it is even number. Check test: ${isEven(myNumber)}`);

const myNumber2 = 8093;
console.log(`The number I have intered is ${myNumber2}. If output is true then it is even number. Check test: ${isEven(myNumber2)}`);

//checking odd only

function isOdd(number){
    if(number % 2 !== 0){
        return true;
    }else{
        return false;
    }
}

const myNumber3 = 555;
console.log(`The number I have intered is ${myNumber3}. If output is true then it is odd number. Check test: ${isOdd(myNumber3)}`);

const myNumber4 =888;
console.log(`The number I have intered is ${myNumber4}. If output is true then it is odd number. Check test: ${isOdd(myNumber4)}`);