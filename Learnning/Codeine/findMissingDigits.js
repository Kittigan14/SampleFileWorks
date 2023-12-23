function findMissingDigits(num) {
    const digits = '0123456789';
    let result = '';

    for (let digit of digits) num.includes(digit) ? '' : result += digit + ', ';

    if (result !== '') return `${num} Missing Digit =  ${result.slice(0, -2)}`;
    else return `${num} has no missing digits`;

}

const NumberStr1 = '123456789';
const NumberStr2 = '53657687691428890';
const NumberStr3 = '19810235689';

console.log(findMissingDigits(NumberStr1));
console.log(findMissingDigits(NumberStr2));
console.log(findMissingDigits(NumberStr3));