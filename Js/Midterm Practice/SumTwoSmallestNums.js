function sumTwoSmallestNums(arr) {
    let positiveNumbers = arr.filter(num => num >= 0);
    let sortedPositiveArray = positiveNumbers.slice().sort((a, b) => a - b);
    let sum = sortedPositiveArray[0] + sortedPositiveArray[1];
    console.log(sum);
}

sumTwoSmallestNums([19, 5, 42, 2, 77]); // Output: 7
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]); // Output: 3453455
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]); // Output: 563
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]); // Output: 4519