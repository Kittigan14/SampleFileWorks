function CheckBinaryWord(word) {
    function charToBinary(char) {
        return char.charCodeAt(0).toString(2);
    }

    var expectedBinaries = Array.from(word).map(charToBinary);

    var missingCharacters = "";
    for (var i = 0; i < expectedBinaries.length; i++) {
        var expectedBinary = expectedBinaries[i];
        var actualBinary = charToBinary(String.fromCharCode(i + 97));

        if (expectedBinary !== actualBinary) {
            missingCharacters += String.fromCharCode(i + 97);
        }
    }

    if (missingCharacters === "") {
        return "No Missing Word";
    } else {
        return missingCharacters;
    }
}

console.log(CheckBinaryWord("abde")); // cf
console.log(CheckBinaryWord("gikl")); // hj
console.log(CheckBinaryWord("mnoq")); // pr
console.log(CheckBinaryWord("stuvwxyz")); // No Missing Word