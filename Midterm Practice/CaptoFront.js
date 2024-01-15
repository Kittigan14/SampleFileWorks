function capToFront(data) {
    let upper = '';
    let lower = '';
    for (let char of data) (char === char.toUpperCase()) ? (upper += char) : (lower += char);
    return console.log(upper + lower);
}

capToFront('hApPy');        // Output: APhpy
capToFront('moveMENT');     // Output: MENTmove
capToFront('shOrtCAKE');    // Output: OCAKEshrt