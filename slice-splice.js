const friends = [12,45,32,22,44,62,29,69,87];

// slice

const partial = friends.slice(2,5);
console.log(partial);

console.log(friends);


// splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const partialSplice = friends.splice(2, 5, 1, 2, 3, 4);
console.log(partialSplice);

console.log(friends);