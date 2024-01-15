capToFront("hAPpy");
capToFront("moveMENT");
capToFront("shOrtCAKE");

function capToFront(str) {
    let Upper = "";
    let Lower = "";

    for (let char of str) {
        if (char === char.toUpperCase()) Upper += char;
        else Lower += char;
    }

    console.log(Upper + Lower);
}