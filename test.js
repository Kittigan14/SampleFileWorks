codeineshop(150);
codeineshop(170);
codeineshop(100);
codeineshop(250);

function codeineshop(value) {
    if (value >= 150 && value < 200) console.log(`Pay : ${value}\nFatec : 1\nCap : 1`);
    else if (value >= 200) console.log(`Pay : ${value}\nFatec : 1\nCap : 2`);
    else console.log(`Pay : ${value}\nFatec : 0\nCap : 0\nFUCK YOU!!`);


    if (value > 150 && value < 200) console.log(`Change : ${value - 150}`);
    else if ( value > 200) console.log(`Change : ${value - 200}`) 
}