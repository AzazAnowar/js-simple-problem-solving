// inches to feet function
function inchesToFeet(inches){
    const myFeet = inches / 12;
    return myFeet;
}

const myinches = 144;
const feet = inchesToFeet(myinches);
console.log(`you have intered ${myinches} inches and it is equvalent to ${feet} feet.`);


const myinches2 = 120;
// const feet2 = inchesToFeet(myinches2);
console.log(`you have intered ${myinches2} inches and it is equvalent to ${inchesToFeet(myinches2)} feet.`);

// miles to kilometers function

function MileTokilometer(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const miles = 2;
console.log(`you have intered ${miles} miles and it is equvalent to ${MileTokilometer(miles)} km.`);

// kilometers to miles function

function kilometerToMile(kilometer){
    return kilometer / 1.60934;
}

const kilometer = 3.21868;
console.log(`you have intered ${kilometer} km and it is equvalent to ${kilometerToMile(kilometer)} km.`);