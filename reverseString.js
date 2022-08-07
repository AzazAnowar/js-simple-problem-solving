const myString = 'I am a good boy';
// character reversed

function reverseString(text){
    let reversed = '';
    for(let i = text.length-1 ; i >= 0; i--){
        reversed = reversed + text[i];
        // console.log(text[i], reversed);
    }
    return reversed;
}

console.log(reverseString(myString));
// reverseString(myString);

// word riversed

function reverseWord(str){
    const word = str.split(' ');
    const result = [];
    // console.log(word);
    for(let i = word.length - 1; i >= 0; i--){
        // const eliment = word[i];
        result.push(word[i]);
    }
    const reversed = result.join(' ');
    return reversed;
}

console.log(reverseWord(myString));