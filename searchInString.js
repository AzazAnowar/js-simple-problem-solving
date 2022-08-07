const lyrics = 'tumi bondhu kala pakhi ami jano ki. bosonto kale tomai bolte pari ni. sada sada kala kala';

// this is case sensitive

const searchString = 'Pakhi';
const doesExist = lyrics.includes('pakhi');
const doesExist2 = lyrics.includes('pokkhi');
console.log("If the substring is in the main string then true otherwise false : ",doesExist);

console.log("If the substring is in the main string then true otherwise false : ",doesExist2);

console.log("If the substring is in the main string then true otherwise false : ",lyrics.includes(searchString));

// ignoring the case

console.log("If the substring is in the main string then true otherwise false : ",lyrics.includes(searchString.toLowerCase()));

// --------------------------------------------------------------

// another way to search

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

// through a function

function stringExist(str, searchStr){
    if(searchStr.indexOf(str) !== -1){
        return 'Exists inside the string';
    }else{
        return 'Cannot find it';
    }
}


const str = 'sada';
console.log('Search Result : ', stringExist(str, lyrics));

// start with

console.log('Start With check : ',lyrics.startsWith('tumi'));
console.log('Start With check : ',lyrics.startsWith('2mi'));

// end with

const fileName = 'myMovies.pdf';
const otherFile = 'myMovies.png';

console.log('Check if end with .pdf :',fileName.endsWith('.pdf'));
console.log('Check if end with .pdf :',otherFile.endsWith('.pdf'));