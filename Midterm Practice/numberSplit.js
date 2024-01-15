function numberSplit(num) {

    if (num >= 0) {
        let half = Math.floor(num / 2);
        return console.log( [half, num - half]);  
    } else {
        let absNum = Math.abs(num);
        let half = Math.floor(absNum / 2);
        return console.log( [-half, -(absNum - half)]);
    }

}

numberSplit(4);  // Output: [2 , 2]
numberSplit(10); // Output: [5 , 5]
numberSplit(11); // Output: [5 , 6]
numberSplit(-9); // Output: [-4 , -5]