capToFront('hApPy')
capToFront('moveMENT')
capToFront('shOrtCAKE')

function capToFront(data) {
    let upper = '';
    let lower = '';
    for (let char of data) {
        if (char === char.toUpperCase()) upper += char;
        else lower += char;
    }
    console.log(upper + lower)
}