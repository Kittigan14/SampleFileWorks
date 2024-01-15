removeDups([1 , 0 , 1 , 0]);
removeDups(["the" , "big" , "cat"]);
removeDups(["john" , "taylor" , "john"]);

function removeDups(data) {

    data.sort();

    let result = ' ';
    
    for (let index = 0; index < data.length; index += true) {

        for (let inner = 1; inner < data.length; inner += true) {

            if (data[index] == data[inner] && index < inner) result += data[index] + ' ';
        }
    }


    return console.log(`Duplicate is : [${result}]`);
}