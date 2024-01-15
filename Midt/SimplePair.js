function SimplePair(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === target) result.push([arr[i], arr[j]]);
        }
    }
    let Output = result.pop([])
    if (Output === undefined) return "null";
    return Output;
}

console.log(SimplePair([1, 2 , 3] , 3));
console.log(SimplePair([1, 2 , 3] , 6));
console.log(SimplePair([1, 2 , 3] , 9));