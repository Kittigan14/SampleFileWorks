const Container = document.getElementById('Container');
const ButtonBlack = document.getElementById('ButtonBlack');
const ButtonWhite = document.getElementById('ButtonWhite');
const TextButton = document.getElementById('TextButton');

ButtonBlack.addEventListener('click', () => {
    Container.style.backgroundColor = '#1a1a1a';
    ButtonWhite.style.display = 'block';
    ButtonBlack.style.display = 'none';
    TextButton.innerHTML = 'Sun';
    TextButton.style.color = '#cccccc';
})

ButtonWhite.addEventListener('click', () => {
    Container.style.backgroundColor = '#cccccc';
    ButtonBlack.style.display = 'block';
    ButtonWhite.style.display = 'none';
    TextButton.innerHTML = 'Moon';
    TextButton.style.color = '#1a1a1a';
})