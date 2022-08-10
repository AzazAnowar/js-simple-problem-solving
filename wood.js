/*
fixed : per item wood requirment
vary : quantity

1. chair --> 3 cft
2. table ---> 10 cft
3. bed ---> 50 cht
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
}

const totalWood = woodCalculator(2, 2, 5);
console.log('Total Wood Rewired: ',totalWood, 'cft');