// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let A = 0;
// let B = 0;

// rl.on("line", (input) => {
//   if (!A) A = parseInt(input);
//   else {
//     B = parseInt(input);

//     let result = '';

//     result = (A > B) ? result = "A" : result = "B";
//     if (A === B) result = "AB";

//     console.log(result);
//     rl.close();
//   }
// });
// rl.on("close", () => {});

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Number 1 : ', (num1) => {
  rl.question('Enter Number 2 : ', (num2) => {

    let values = '';
    num1 > num2 ? values = "A" : values = "B";
    if (num1 === num2) values = "AB";

    console.log(values);
    rl.close();
  });
});