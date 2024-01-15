// >> TYPE 1 <<
function findCombinaryOfWords(words, characters) {
  const validWords = words.filter(word => {
    return word.split('').every(char => characters.includes(char));
  });
  const sortedWords = validWords.sort((a, b) => {
    const sumA = a.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const sumB = b.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return sumB - sumA;
  });
  return sortedWords;

// >> TYPE 2 <<
// const validWords = [];
// for (const word of words) {
//   let isValid = true;
//   let asciiSum = 0;
//   for (const char of word) {
//     if (!characters.includes(char)) {
//       isValid = false;
//       break;
//     }
//     asciiSum += char.charCodeAt(0);
//   }
//   if (isValid) validWords.push({ word, asciiSum });
// }
// validWords.sort((a, b) => b.asciiSum - a.asciiSum);
// return validWords.map(entry => entry.word);
}

const words = ["cherry", "date", "honeydew", "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];

const result = findCombinaryOfWords(words, characters);
console.log(result);

const words2 = ["date", "fig", "mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findCombinaryOfWords(words2, characters2);
console.log(result2);

const words3 = ["apple", "banana", "orange", "kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findCombinaryOfWords(words3, characters3);
console.log(result3);

module.exports = {
  findCombinaryOfWords
};