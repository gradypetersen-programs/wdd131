const navButton = document.querySelector('#hamburger');
const navList = document.querySelector('ul');

navButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});

