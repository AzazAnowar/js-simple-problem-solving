// swap variable by temp

let first = 5;
let second = 7;
console.log(first,second);
let temp = first;
first = second;
second = temp;
console.log(first,second);

// swap variable without by temp

let a = 50;
let b = 100;
console.log(a, b);
a = a+b; //150
b = a-b; //50
a = a-b; //100
console.log(a, b);

// swap variable by destructing

let x = 10;
let y = 20;
console.log(x,y);
[x, y] = [y, x];
console.log(x,y);