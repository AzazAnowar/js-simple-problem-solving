// get max number from an array

function maxInArray(numbers){
    // console.log('array inside the numbers', numbers);
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 226];
console.log("Given array : ",heights)
const tallest = maxInArray(heights); 
console.log("Tallest Person is: ", tallest);


// get smallest number of an array
function minInArray(numbers){
    let minimum = numbers[0];
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] < minimum){
            minimum = numbers[i];
        }
    }
    return minimum;
}

const shortest = minInArray(heights); 
console.log("Shortest Person is: ", shortest);