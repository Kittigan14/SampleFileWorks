function capToFront(data) {
    let upper = '';
    let lower = '';
    for (let char of data) {
        if (char === char.toUpperCase()) upper += char;
        else lower += char;
    }
    return (upper + lower);
}

console.log(capToFront('hApPy'));
console.log(capToFront('moveMENT'));
console.log(capToFront('shOrtCAKE'));