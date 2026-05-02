// 1. Импортируем функцию в освном файле с кодом на кнопки, в переменную, чтобы она работала при клике (через if)
import { openRecipeBook } from './ui/screen-list-recipe.js';
import { returnMainMenu } from './return-main-menu.js'
// потом добавишь: import { showGameHub } from './game-hub.js';

// 2. Находим кнопки в основном файле. Т.к. этот файл подключен к основному .html и все что мы ищем через этот код, мы ищем сразу в этом файле
const listBtn = document.getElementById('list-menu');
const returnBtn = document.getElementById('main-menu-btn');
// const startBtn = document.getElementById('start-game');

// 3. Вешаем обработчики, проверяем заполнена ли переменная данными (null или нет). Данный вариант упрощенный и корректный, приравнивается к listBtn !=== null
if (listBtn) {
    listBtn.addEventListener('click', openRecipeBook);
}
if (returnBtn) {
    returnBtn.addEventListener('click', returnMainMenu);
}
// if (startBtn) { startBtn.addEventListener('click', showGameHub); }
