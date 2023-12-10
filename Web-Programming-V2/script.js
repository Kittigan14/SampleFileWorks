// Dark Mode Function & Save Value Dark Mode
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const textmode = document.getElementById('textmode');
    const links = document.querySelectorAll('.navbar a');

    function updateDarkMode(state) {
        document.body.classList.toggle('dark-mode', state);
        textmode.innerHTML = state ? 'Light' : 'Dark';
        modeToggle.checked = state;
    }

    function setDarkModeState(state) {
        updateDarkMode(state);
        document.cookie = `darkMode=${state}; path=/`;
    }

    function getDarkModeState() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'darkMode') {
                return value === 'true';
            }
        }
        return false;
    }

    const darkModeState = getDarkModeState();
    setDarkModeState(darkModeState);

    modeToggle.addEventListener('change', function () {
        setDarkModeState(modeToggle.checked);
    });

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (isLinkLocked(link)) {
                event.preventDefault();
                return;
            }

            lockLink(link);
            setTimeout(function () {
                unlockLink(link);
            }, 1000);
        });
    });
});

// Menu Nav-bar slide
function setElementOpacity(elements, opacityValue) {
    elements.forEach(elementId => {
        document.getElementById(elementId).style.opacity = opacityValue;
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    setElementOpacity(["slideitem-1", "slideitem-2", "slideitem-3", "slideitem-4"], "1");
    setElementOpacity(["navitem-1", "navitem-2", "navitem-3", "navitem-4"], "0");
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setElementOpacity(["slideitem-1", "slideitem-2", "slideitem-3", "slideitem-4"], "0");
    setElementOpacity(["navitem-1", "navitem-2", "navitem-3", "navitem-4"], "1");
}