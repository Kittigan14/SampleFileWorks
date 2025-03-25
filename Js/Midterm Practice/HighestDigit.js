function highestDigit(data) {
    let max = [];
    for (let num of data.toString()) max += num;
    let maxvalue = max[0];
    for (let value of max) value > maxvalue ? maxvalue = value : 0; console.log(maxvalue);
}

highestDigit(379);       // Output: 9
highestDigit(2);         // Output: 2
highestDigit(377401);    // Output: 7