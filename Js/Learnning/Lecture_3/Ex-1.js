let values1 = ['Apple' , 1 , false];
let values2 = ['Fries' , 2 , true];
let values3 = ['Mars' , 9 , 'Apple'];

let ConcatValues = values1.concat(values2 , values3);
let result = '';
for (let i = 0; i < ConcatValues.length; i += true) {
    for (let n = 1; n < ConcatValues.length; n += true) {
        if (ConcatValues[i] == ConcatValues[n] && i < n) result += ConcatValues[i] + ' ';
    }
}
console.log(`Values : ${result}`)