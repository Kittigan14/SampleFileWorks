function NumberRotation(number) {
    let numberStr = number.toString();
    let rotations = [];
  
    for (let i = 0; i < numberStr.length; i++) {
      let rotatedNumber = parseInt(numberStr.slice(i) + numberStr.slice(0, i));
      rotations.push(rotatedNumber);
    }
  
    return rotations;
  }
  
  // Test cases
  let result1 = NumberRotation(123);
  let result2 = NumberRotation(98765);
  
  console.log(result1); // [123, 231, 312]
  console.log(result2); // [98765, 87659, 76598, 65987]
  