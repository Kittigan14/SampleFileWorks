function findMissingDigits(num) {
    const digits = '0123456789';
    let result = '';

    for (let digit of digits) num.includes(digit) ? '' : result += digit + ', ';

    if (result !== "") return num + ' Missing Digit = ' + result.slice(0, -2);
    else return num + ' has no missing digits';

}


console.log(findMissingDigits("123456789"));
console.log(findMissingDigits("53657687691428890"));
console.log(findMissingDigits("19810235689"));