function createEyes(rows) {
    for (let i = 1; i <= rows; i++) {
      let spaces = ' '.repeat(rows - i);
      let eyes = '$ '.repeat(i);
  
      console.log(spaces + eyes);
    }
  }
  
  createEyes(5);
  