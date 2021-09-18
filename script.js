const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__list');

btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    nav.classList.toggle('active');
})
