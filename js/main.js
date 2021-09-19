let btn_menu = document.querySelector('.btn_menu');
let menu = document.querySelector('.nav_var');
let header = document.querySelector('.header');

btn_menu.addEventListener('click', () => {
    menu.classList.toggle('show');  
});

window.addEventListener('scroll', ()=> {
    header.classList.toggle('color',window.scrollY > 1000); 
});