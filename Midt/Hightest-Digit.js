highestDigit(379)
highestDigit(2)
highestDigit(377401)

function highestDigit(data) {
    let arr = [];
    for (let num of data.toString()) arr.push(num)
    arr = arr.sort()
    console.log(arr.pop())
}