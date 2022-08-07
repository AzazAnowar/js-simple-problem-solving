const lyrics = 'tumi bondhu kala pakhi ami jano ki. bosonto kale tomai bolte pari ni. sada sada kala kala rong jomeche sada kala.';

console.log(lyrics);

// split 

// console.log(lyrics.split(' '));
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');

console.log(parts);
console.log(sentences);
console.log(chars);

// slice 

const partial = lyrics.slice(5, 12);
console.log('This is slice 5-12 : ',partial);

// substring
const partial2 = lyrics.substring(5, 22);
console.log('This is substring 5-22 : ',partial2);

// join

const lines =[
    'Tumi bondhu kala pakhi ami jano ki',
    'Bosonto kale tomai bolte pari ni',
    'Sada sada kala kala rong jomeche sada kala'
];

const newSong = lines.join('. ');
console.log(newSong);