const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  return accumulator + currentValue;
}

const result = array.reduce(reducer, 0);

console.log(`accumulator: ${result}`);
