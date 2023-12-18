let values1 = ['Apple' , 1 , false];
let values2 = ['Fries' , 2 , true];
let values3 = ['Mars' , 9 , 'Apple'];

let NewValues = values1.concat(values2 , values3);
let result = '';
for (let index = 0; index < NewValues.length; index += true) {
    for (let inner = 1; inner < NewValues.length; inner += true) {
        if (NewValues[index] == NewValues[inner] && index < inner) result += NewValues[index] + ' '; 
    }
}
console.log(`Result : ${result}`)