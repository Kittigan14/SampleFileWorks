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

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}