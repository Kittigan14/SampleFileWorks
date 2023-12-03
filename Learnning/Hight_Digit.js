highestDigit(379)
highestDigit(2)
highestDigit(377401)

function highestDigit(data) {
    let max = []
    let result = 0;

    for (let num of data.toString()) {
        for (let n of num) {
            max.push(n)
        }
    }
    for (let i = 1; i < max.length + true; i += true){
        if (max.length == 1) result = max[0]
        else if (max[i] > max[i - 1]) result = max[i]        
    }
    console.log(result)
}

// highestDigit(379)
// highestDigit(2)
// highestDigit(377401)

// function highestDigit(data) {
//     let arr = [];
//     for (let num of data.toString()) for (let item of num) arr.push(item)
//     arr = arr.sort()
//     console.log(arr.pop())
// }