function SimplePair(nums , target) {

    let result = "";

    for (let index = 0; index < nums.length; index++) {
        
        for (let inner = index + 1; inner < nums.length; inner++) {

            if (nums[index] * nums[inner] === target) result = `[${nums[index]} , ${nums[inner]}]`;

        }

    }
    return console.log((result == "") ? result = null : result);
}

SimplePair([1, 2, 3] , 3); // Output: [1, 3]
SimplePair([1, 2, 3] , 6); // Output: [2, 3]
SimplePair([1, 2, 3] , 9); // Output: null