const userName = 'KalaManik';
const userInput = 'kalaManiK';

// to lower case
console.log(userName.toLowerCase());
// to upper case
console.log(userInput.toUpperCase());


// this is used for checking the valid or invalid user
function checkValidUser(userName, userInput){
    if(userName.toLowerCase() === userInput.toLowerCase()){
        // console.log('Vallid User');
        return 'Valid User';
    }else{
        // console.log('Invalid User');
        return 'Invalid User';
    }
}

let checkResult = checkValidUser(userName, userInput);
console.log("Yhis is the test Result : ",checkResult);