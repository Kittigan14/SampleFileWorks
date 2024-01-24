function findMissingDigits(num) {
    const digits = '0123456789';
    let result = '';

    for (let digit of digits) num.includes(digit) ? '' : result += digit + ', ';

    if (result !== '') console.log (`${num} Missing Digit =  ${result.slice(0, -2)}`);
    else console.log (`${num} has no missing digits`);

}

const NumberStr1 = '123456789';
const NumberStr2 = '53657687691428890';
const NumberStr3 = '19810235689';

findMissingDigits(NumberStr1);
findMissingDigits(NumberStr2);
findMissingDigits(NumberStr3);