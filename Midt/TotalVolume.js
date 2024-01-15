totalVolume([4 , 2 , 4] , [3 , 3 , 3] , [1 , 1 , 1] , [2 , 1 , 1]);

function totalVolume(num) {

    let numbers = 0;

    for (let nums of num) {
        numbers += nums;

        for (let index = 1; index < numbers.length; index++) {
            numbers += numbers;
        }
    }
    

    console.log(numbers);
}