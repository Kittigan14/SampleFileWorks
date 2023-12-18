// let height = 5;

// for (let i = 1; i <= height; i++) {
//     let row = '';
//     for (let n = 1; n <= height - i ; n++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// let height = 5;
// let Text = '';

// for (let i = 1; i <= height; i++) {
//   for (let j = 1; j <= i; j++) {
//     Text += '*';
//   }
//   Text += '\n';
// }

// console.log(Text);

// function Pyramid(Height) {
//     let Text = '';
//     for (let i = 1; i <= Height; i++) {
//         for (let j = 1; j <= i; j++) {
//             Text += '*';
//         }
//         Text += '\n';
//     }
//     console.log(Text);
// }
// Pyramid(5);


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter Height : ', (height) => {

//     let Text = '';
//     for (let i = 1; i <= height; i++) {
//         for (let j = 1; j <= i; j++) {
//             Text += '*';
//         }
//         Text += '\n';
//     }
//     console.log(Text);

//     rl.close();
// });



// let height = prompt('Enter Height : ');
// let Text = '';

// if (!isNaN(height) && height > 0) {
//     height = parseInt(height);

//     for (let i = 1; i <= height; i++) {
//         for (let j = 1; j <= i; j++) {
//             Text += '*';
//         }
//         Text += '\n';
//     }
//     console.log(Text);
// } else {
//     console.log('Try Input Again : ');
// }


// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
//     inputList.push(line);
// }).on("close", () => {

//     let Text = '';
//     for (let i = 1; i <= inputList.join(""); i++) {
//         for (let j = 1; j <= i; j++) {
//             Text += '*';
//         }
//         Text += '\n';
//     }
//     console.log(Text);

// });

// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	if (inputList.join("") >= 80) {
//       console.log("A");
//     }
// 	else if (inputList.join("") >= 70) {
//       console.log("B");
//     }
// 	else if (inputList.join("") >= 60) {
//       console.log("C");
//     }
// 	else if (inputList.join("") >= 50) {
//       console.log("D");
//     }
// 	else {
//       console.log("F");
//     }

// });

// let rl = require("readline").createInterface(process.stdin);
// let A = 0;
// let B = 0;

// rl.question('A:', (inputA) => {
//     A = inputA;
//     rl.question('B:', (inputB) => {
//         B = inputB;

//         let result = '';
//         if (A === B) {
//             result = 'AB';
//         }
//         else if (A > B) {
//             result = 'A';
//         }
//         else {
//             result = 'B';
//         }
//         console.log(result);
//         rl.close();
//     });
// });


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('ป้อนตัวเลข a: ', (aInput) => {
//   rl.question('ป้อนตัวเลข b: ', (bInput) => {
//     // แปลงข้อมูลที่รับมาเป็นตัวเลข
//     const a = parseInt(aInput);
//     const b = parseInt(bInput);

//     // ตรวจสอบว่า a และ b เป็นตัวเลขที่ถูกต้องหรือไม่
//     if (!isNaN(a) && !isNaN(b)) {
//       // คำนวณและแสดงผลรวม
//       const sum = a + b;
//       console.log(`ผลรวมของ ${a} และ ${b} คือ: ${sum}`);

//       // ปิด interface
//       rl.close();
//     } else {
//       console.log('กรุณาป้อนตัวเลขที่ถูกต้อง');
//       rl.close();
//     }
//   });
// });