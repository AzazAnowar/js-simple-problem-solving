function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(`Year ${year} is a leap year`);
    }else{
        console.log(`Year ${year} is not a leap year`);
    }
}

const myYear = 2021;
console.log("You have Entered Year : ",myYear);
leapYear(myYear);


// function findLeapYear(year) {
//     let newArray = []
//     for (let i = 0; i < year.length; i++) {
//     if (year[i] % 4 == 0) {
//     newArray.push(year[i])
//     }
//     }
//     return newArray
//     }
//     const years = [2023, 2024, 2025, 2028, 2030];
//     console.log(findLeapYear(years))