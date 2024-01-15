function SimplePair(nums , target) {

    let result = "";

    // Loop First
    for (let index = 0; index < nums.length; index++) {
        
        // Loop Second
        for (let inner = index + 1; inner < nums.length; inner++) {

            // num[loopfirst] * num[loopsecond] = target : result = nums[loopfirst] , nums[loopsecond] 
            if (nums[index] * nums[inner] === target) result = `[${nums[index]} , ${nums[inner]}]`;

        }

    }
    // ( result == null ) ( true ) => return null : ( false ) => return result 
    return console.log((result == "") ? result = null : result);

}

// function (nums , target)
SimplePair([1, 2, 3] , 3); // Output: [1, 3]
SimplePair([1, 2, 3] , 6); // Output: [2, 3]
SimplePair([1, 2, 3] , 9); // Output: null