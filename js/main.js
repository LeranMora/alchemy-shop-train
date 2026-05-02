// 1. Импорт
import { showRecipe } from './list-potions.js';
// потом добавишь: import { showGameHub } from './game-hub.js';

// 2. Находим кнопки
const listBtn = document.getElementById('list-menu');
// const startBtn = document.getElementById('start-game');

// 3. Вешаем обработчики
if (listBtn) {
    listBtn.addEventListener('click', showRecipe);
}
// if (startBtn) { startBtn.addEventListener('click', showGameHub); }
