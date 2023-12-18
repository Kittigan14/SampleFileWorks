const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let A = 0;
  let B = 0;
  
  rl.on("line", (input) => {
    if (!A) {
      A = parseInt(input);
    } else {
      B = parseInt(input);
  
      let result = '';
      if (A > B) {
        result = 'A';
      } else if (A < B) {
        result = 'B';
      } else {
        result = 'AB';
      }
  
      console.log(result);
  
      rl.close();
    }
  });
  
  rl.on("close", () => {
  });