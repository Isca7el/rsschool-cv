const btn = document.querySelector('.header__btn');
const list = document.querySelector('.header__list');
const nav = document.querySelector('.header__nav');
// const items = document.querySelectorAll('')

btn.addEventListener('click', function(e){
    console.log(e.target)
    btn.classList.add('active');
    list.classList.add('active');
    nav.classList.add('active')
})

let str = `Критерии оценки:
вёрстка валидная +10  - валидатор выдает ошибки только на код JS, так как использована библиотека для подсветки кода;
вёрстка семантическая +20 теги: header, nav, aside, figure, section, main, h1-h4;
оформления СV используются css-стили +10;
контент размещен в центрируемом блоке +10;
верстка адаптивная +10;
есть адаптивное бургер-меню +10;
присутствует изображение - фото +10;
контакты для связи и перечень навыков оформлены в виде списка ul > li +10;
CV содержит контакты для связиб выполнено на англ языке +10;
CV содержит подсвеченный код +10;
CV содержит изображения-ссылки на выполненные проекты +10
CV выполнено на английском языке +10;
выполнены требования к Pull Request +10
качество выполнения CV ниже чем в примерах CV 0

Итого: 130`

console.log(str);