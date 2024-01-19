let HightDigit = (digits) => {
    let num = [];
    for (let nums of digits.toString()) num += nums;

    let maxvalues = num[0];
    for (value of num) value > maxvalues ? maxvalues = value : 0;
    return console.log(maxvalues);
};

HightDigit(379);
HightDigit(2);
HightDigit(377401);