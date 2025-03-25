function removeDups(arr) {
    return console.log([...new Set(arr)]);
}

removeDups([1, 0, 1, 0]);                   // Output: [1, 0]
removeDups(["The", "big", "cat"]);          // Output: ["The", "big", "cat"]
removeDups(["John", "Taylor", "John"]);     // Output: ["John", "Taylor"]