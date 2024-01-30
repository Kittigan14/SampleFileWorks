let CapToFront = (front) => {
    let upper = '';
    let lower = '';

    for (let str of front) str === str.toUpperCase() ? upper += str : lower += str;
    return console.log(upper + lower);
}

CapToFront('hApPy')
CapToFront('moveMENT');
CapToFront('shOrtCAKE');