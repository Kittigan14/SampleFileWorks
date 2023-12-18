function equation(value) {
    let Numbers = '';
    let Operator = '+';
    let result = 0;
  
    for (const char of value) {
      if ('+-*/'.includes(char)) {
        result = Operation(result, Number(Numbers), Operator);
        Operator = char;
        Numbers = '';
      } else Numbers += char;
    }
  
    result = Operation(result, Number(Numbers), Operator);
  
    console.log(result);
  }
  
  function Operation(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1+ num2;
      case '-':
        return num1- num2;
      case '*':
        return num1* num2;
      case '/':
        return num1/ num2;
      default:
        return num1;
    }
  }
  
equation("1+1");
equation("7*4-2");
equation("1+1+1+1+1");