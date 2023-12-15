const str1 = 'The quick brown fox jumps over the lazy dog.';
const str2 = 'The Dog';
const str3 = 'The Cat';

findLostString(str1);
findLostString(str2);
findLostString(str3);

function findLostString(data) {
    const word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const UpperWord = data.toUpperCase();
    let result = '';
    for (let letter of word) UpperWord.includes(letter) ? '' : result += letter + ', ';

    console.log(`Find Missing word of : ${data}`)
    console.log(`Missing word is : ${result.toLowerCase().slice(0, -2)}\n`)
}