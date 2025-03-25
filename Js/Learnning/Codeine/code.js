duplicate(['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'a'
]);

duplicate(['a', 'b', 'c',
    'd', 'd', 'a',
    'g', 'h', 'i' 
]);

duplicate(['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i'
]);



function duplicate(arr) {

    arr.sort();
    let result = ' ';
    for (let index = 0; index < arr.length; index += true) {

        for (let inner = 1; inner < arr.length; inner += true) {

            if (arr[index] == arr[inner] && index < inner) result += arr[index] + ' ';
        }
    }
    return console.log(`Duplicate is : [${result}]`);
}