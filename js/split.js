const left = document.querySelector('.left');
const right = document.querySelector('.right');
const contact = document.querySelector('.contact');
const up = document.querySelector('.foto');

left.addEventListener('mouseenter', () => {
	contact.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
	contact.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
	contact.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
	contact.classList.remove('hover-right');
});