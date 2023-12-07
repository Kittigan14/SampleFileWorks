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

// let slidespan1 = document.getElementById('.slider-span1')
// let slidespan2 = document.getElementById('.slider-span2')
// let slidespan3 = document.getElementById('.slider-span3')

// slidespan1,slidespan2,slidespan3.addEventListener('click' , () => {
//     slidespan1.style.transform = ('scale(1.3)');
//     slidespan2.style.transform = ('scale(1.3)');
//     slidespan3.style.transform = ('scale(1.3)');
//     slidespan1.style.background = ('transparent');
//     slidespan2.style.background = ('transparent');
//     slidespan3.style.background = ('transparent');
//     slidespan1.style.backdropFilter = ('blur(0)');
//     slidespan2.style.backdropFilter = ('blur(0)');
//     slidespan3.style.backdropFilter = ('blur(0)');
// })