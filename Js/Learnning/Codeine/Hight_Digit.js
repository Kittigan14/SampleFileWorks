highestDigit(8397);
highestDigit(2);
highestDigit(397401);

function highestDigit(data) {
    let max = [];
    for (let num of data.toString()) for (let n of num) max += n;
    let maxvalue = max[0];
    for (let value of max) value > maxvalue ? maxvalue = value : 0; console.log(maxvalue);
}

// highestDigit(379)
// highestDigit(2)
// highestDigit(377401)

// function highestDigit(data) {
//     let arr = [];
//     for (let num of data.toString()) for (let item of num) arr.push(item)
//     arr = arr.sort()
//     console.log(arr.pop())
// }