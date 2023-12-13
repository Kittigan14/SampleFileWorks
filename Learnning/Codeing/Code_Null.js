function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m == null) return 0;
    return m.lenght;
}

console.log(getVowels("seeing"));