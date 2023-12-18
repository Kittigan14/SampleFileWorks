equation("1+1");
equation("7*4-2");
equation("1+1+1+1+1");

// function equation(data) {
//     try {
//         console.log(eval(data));
//     } catch (error) {
//         console.log("Error");
//     }
// }

function equation (data) {
    const math = require('mathjs');
    const result = math.evaluate(data);
    console.log(result);
}