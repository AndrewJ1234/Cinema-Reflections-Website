let menu_icon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav(elementClass) {
    let navigation = document.querySelector(elementClass);
    navigation.classList.toggle('toggle');
}

menu_icon.addEventListener('click', function () {
    toggleNav('.navLinksForHome');
});

menu_icon.addEventListener('click', function () {
    toggleNav('.navLinks');
});

menu_icon.addEventListener('click', function () {
    toggleNav('.navLinksForParallels');
});

menu_icon.addEventListener('click', function () {
    toggleNav('.conclusionNav');
});
