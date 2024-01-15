function myFunction() {
    let element = document.getElementById('container');
    let btn = document.getElementById('myBtn');
    element.classList.toggle("dark-mode");
    if (btn.innerHTML == 'Dark') btn.innerHTML = ('Light');
    else btn.innerHTML = ('Dark');
 }