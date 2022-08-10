const friendAge = [12, 11, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(typeof friendAge);
console.log(Array.isArray(friendAge));

const newAge = [21, 22, 23, 24, 25];
const allFriend = newAge.concat(friendAge);
console.log(allFriend);

console.log(friendAge.includes(17));