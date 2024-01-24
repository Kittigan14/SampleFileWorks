// ! Result
// Find Missing word of : The quick brown fox jumps over the lazy dog.
// Missing word is :

// Find Missing word of : The Dog
// Missing word is : a, b, c, f, i, j, k, l, m, n, p, q, r, s, u, v, w, x, y, z

// Find Missing word of : The Cat
// Missing word is : d, f, g, i, j, k, l, o, p, q, r, s, u, v, w, x, y, z

const str1 = 'The quick brown fox jumps over the lazy dog.';
const str2 = 'The Dog';
const str3 = 'The Cat';

findLostString(str1);
findLostString(str2);
findLostString(str3);

function findLostString(str) {

    let tmp = str.toLowerCase().trim();
    const arr = [ "a" , "b" , "c" , "d" , "e" , "f" , 
                  "g" , "h" , "i" , "j" , "k" , "m" ,
                  "n" , "o" , "p" , "q" , "r" , "s" , 
                  "t" , "u" , "v" , "w" , "x" , "y" ,
                  "z" 
                ];
    
    for ( let char of tmp ) {

        for ( let letter of arr ) {

            if ( char == letter ) arr.splice( arr.indexOf(letter) , 1 );

        }

    }
    
    let message = 'Missage word is : ';
    for (let index = 0 ; index < arr.length ; index += true) {

        message += (index < (arr.length - 1)) ? arr[index] + ", " : arr[index];
    }

    console.log(`Find Missage word of : ${str}\n${message}`);
    
}