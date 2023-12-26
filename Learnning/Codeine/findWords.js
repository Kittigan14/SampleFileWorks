function findCombinaryOfWords(words, characters) {
    const Binary = [];

    for (const word of words) {
        let isValue = true;
        for (const char of word) {
            if (!characters.includes(char)) {
                isValue = false;
                break;
            }
        } if (isValue) Binary.push(word);
    }

    const sortedWords = Binary.sort((a, b) => {
        const sumA = a.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const sumB = b.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return sumB - sumA;
    });

    return sortedWords;
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