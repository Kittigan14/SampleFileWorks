const Container = document.getElementById('Container');
const SlideCardone = document.getElementById('Slide_Card_one');
const SlideCardtwo = document.getElementById('Slide_Card_two');
const TextSlideOne = document.getElementById('TextSlideOne');
const TextSlideTwo = document.getElementById('TextSlideTwo');

SlideCardone.addEventListener('click', () => {
    SlideCardone.style.display = 'none';
    SlideCardtwo.style.display = 'block';
    TextSlideTwo.style.color = 'var(--Black)';
    Container.style.backgroundColor = 'var(--Black)';
})

SlideCardtwo.addEventListener('click', () => {
    SlideCardone.style.display = 'block';
    SlideCardtwo.style.display = 'none';
    TextSlideTwo.style.color = 'var(--White)';
    Container.style.backgroundColor = 'var(--White)';
})