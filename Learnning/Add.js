// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let num1 = null;
// let num2 = null;
// let linesReceived = 0;

// rl.on("line", (input) => {
//   if (linesReceived === 0) {
//     num1 = parseInt(input);
//   } else if (linesReceived === 1) {
//     num2 = parseInt(input);

//     const sum = num1 + num2;
//     console.log(sum);

//     rl.close();
//   }

//   linesReceived++;
// });

// rl.on("close", () => {
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input A : ', (aInput) => {
  rl.question('Input B : ', (bInput) => {
    const a = parseInt(aInput);
    const b = parseInt(bInput);

    if (!isNaN(a) && !isNaN(b)) {
      const sum = a + b;
      console.log(`Sum ${a} And ${b} = ${sum}`);

      rl.close();
    } else {
      console.log('Enter Input Again.');
      rl.close();
    }
  });
});