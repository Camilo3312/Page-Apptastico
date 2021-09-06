let btn_menu = document.querySelector('.btn_menu');
let header = document.querySelector('.header');

let menu = document.querySelector('.nav_var');

btn_menu.addEventListener('click', () => {
    menu.classList.toggle('show');
})
