// script.js

// Получаем кнопку «Список рецептов»
let listBtn = document.getElementById('list-menu');

// Получаем блок с меню рецептов
let recipeMenu = document.getElementById('recipe-menu');

// Флаг: открыто меню или нет
let menuOpen = false;

// Вешаем обработчик клика
listBtn.addEventListener('click', function() {
    if (menuOpen) {
        recipeMenu.style.display = 'none';
        listBtn.innerText = 'Список рецептов';
        menuOpen = false;
    } else {
        recipeMenu.style.display = 'block';
        listBtn.innerText = 'Назад';
        menuOpen = true;
    }
});