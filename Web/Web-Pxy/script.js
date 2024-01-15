function mynavbar() {
    var navbar = document.getElementById("nav-bar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}