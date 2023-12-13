function reverseString(value) {
    const reverseValue = value.split('').reverse().join('');
    return reverseValue;
}

console.log(reverseString("Hello JavaScript"));