function findLostString(data) {
    const word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const UpperWord = data.toUpperCase();
    let result = '';
    for (let letter of word) UpperWord.includes(letter) ? '' : result += letter + ', ';

    return (`Find Missing word of : ${data} \nMissing word is : ${result.toLowerCase().slice(0, -2)}\n`)
}

const str1 = 'The quick brown fox jumps over the lazy dog.';
const str2 = 'The Dog';
const str3 = 'The Cat';

console.log(findLostString(str1));
console.log(findLostString(str2));
console.log(findLostString(str3));