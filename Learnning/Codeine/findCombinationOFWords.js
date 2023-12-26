function findCombinaryOfWords(words, characters) {
  const validWords = words.filter(word => {
    return word.split('').every(char => characters.includes(char));
  });

  const wordsMap = new Map();

  validWords.forEach(word => {
    const asciiSum = word.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    wordsMap.set(word, asciiSum);
  });

  const sortedWords = Array.from(wordsMap.entries()).sort((a, b) => b[1] - a[1]);
  
  return sortedWords.map(entry => entry[0]);

}

const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];

const result = findCombinaryOfWords(words, characters);
console.log(result);

const words2 = ["date","fig","mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findCombinaryOfWords(words2, characters2);
console.log(result2);


const words3 = ["apple", "banana", "orange","kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findCombinaryOfWords(words3, characters3);
console.log(result3);


module.exports = { 
  findCombinaryOfWords
};