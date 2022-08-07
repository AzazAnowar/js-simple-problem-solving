// const jim = 84;
// const dela = 75;
const jim = 94;
const dela = 95;
const chinku = 98;

// max number between two

function maxInTwoNumber(jim, dela){
    if(jim > dela){
        console.log("JIM Will eat the cake");
    }else{
        console.log("DELA will eat the cake");
    }
}

maxInTwoNumber(jim, dela);

// max number between three

function maxInThreeNumber(jim, dela, chinku){
    if(jim > dela && jim > chinku){
        console.log("JIM Will eat The cake");
    }else if(dela > jim && dela > chinku){
        console.log("DELA Cake Khabe ai bela");
    }else{
        console.log("CHINKU Will eat The cake");
    }
}

maxInThreeNumber(jim,dela,chinku);

// min number between three

function minOfThreeNum(jim, dela, chinku){
    if(jim < dela && jim < chinku){
        console.log("JIM Will eat The cake");
    }else if(dela < jim && jim < chinku){
        console.log("DELA Cake Khabe ai bela");
    }else{
        console.log("CHINKU Will eat The cake");
    }
}

minOfThreeNum(jim, dela, chinku);

// simple way

console.log(Math.max(jim, dela, chinku));
console.log(Math.min(jim, dela, chinku));