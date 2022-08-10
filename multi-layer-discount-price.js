/*
1. if ticket number is less than 100, per ticket price 100tk
2. if ticket number is more than 100, but less than 200 ,First 100 tickeats will be 100/ticket. rest tickets will be 80tk
3. if you purchase more than 200 tickets
    first 100 --------> 100tk
    101-200---------> 90tk
    200+  ---------> 70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicetRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }else if(ticketQuantity <= 200 && ticketQuantity >= 101){
        const first100Price = first100Rate * 100;
        const restTicketQuantiy = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantiy * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }else{
        const first100Price = first100Rate * 100;
        const second100Price = 100 * second100Rate;
        const restTicketQuantiy = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantiy * restTicetRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(220);
console.log(price);