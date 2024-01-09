// >> TYPE 1 <<
function highestDigit(data) {
    let max = [];
    for (let num of data.toString()) for (let n of num) max += n;
    let maxvalue = max[0];
    for (let value of max) value > maxvalue ? maxvalue = value : 0; return (maxvalue);
}

// >> TYPE 2 <<
// function highestDigit(data) {
//     let arr = [];
//     for (let num of data.toString()) for (let item of num) arr.push(item);
//     arr = arr.sort();
//     return (arr.pop());
// }

console.log(highestDigit(8397));
console.log(highestDigit(2));
console.log(highestDigit(387401));