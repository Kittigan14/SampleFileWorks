function reverseString(value) {
    let revrseValue = "";

    value.split("").forEach((char) => {
        revrseValue = char + revrseValue;        
    });

    return revrseValue;
}

console.log(reverseString("Reverse Me"));