// function getSumOfArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//        const index = i;
//        const element = numbers[index];
//        sum = sum + element;
//        console.log(index, element,sum);
//     }
//     return sum;
// }

function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        console.log(i, numbers[i], sum);
    }
    return sum;
}


const myNumbers = [12, 45, 65, 78, 32, 45, 91];
console.log("Sum of the array : ",getSumOfArray(myNumbers));