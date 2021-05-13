<<<<<<< HEAD
window.addEventListener('scroll', () => {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle')
    let menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
=======
window.addEventListener('scroll', () => {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle')
    let menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
>>>>>>> 40934c30a2e2ac074b8d87ebc7e1d4b61a5cf664
}