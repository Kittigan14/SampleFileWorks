function totalVolume(...boxes) {
    const sum = boxes.reduce((acc, box) => acc + box.reduce((product, side) => product * side, 1), 0);
    return console.log(sum);
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]); // Output: 63
totalVolume([2, 2, 2], [2, 1, 1]);                       // Output: 10
totalVolume([1, 1, 1]);                                  // Output: 1