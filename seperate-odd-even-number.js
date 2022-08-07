// sum of array
function sumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        console.log(i, numbers[i], sum);
    }
    return sum;
}

// sum of odd number of array

function getOddNumberOfArray(numbers){
    let oddNumberArray = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            oddNumberArray.push(numbers[i]);
        }
    }
    return oddNumberArray;
}

// sum of even number of array

function getEvenNumberOfArray(numbers){
    let evenNumberArray = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumberArray.push(numbers[i]);
        }
    }
    return evenNumberArray;
}

const myNumbers = [12, 45, 65, 78, 32, 45, 91];

const oddNumbers = getOddNumberOfArray(myNumbers);
const evenNumbers = getEvenNumberOfArray(myNumbers);

console.log("Sum of given array : ", sumOfArray(myNumbers));
console.log("Odd Numbers from the given array :",oddNumbers);
console.log("Sum of Odd Numbers : ", sumOfArray(oddNumbers));
console.log("Even Numbers from the given array :",evenNumbers);
console.log("Sum of Even Number : ",sumOfArray(evenNumbers));