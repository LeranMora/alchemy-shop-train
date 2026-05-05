export function returnMainMenu() {
  const openMainMenu = document.getElementById('screen-main-menu');
  if (openMainMenu) {
    openMainMenu.style.display = 'block';
  }
}

export function showMainMenu() {
  const screen = document.getElementById('screen-main-menu');
  if (screen) {
    screen.innerHTML = `
      <h2>Добро пожаловать в «Мандрагору», молодой алхимик!</h2>
      <p>Это место - ваша личная лавка, где вы можете прокачивать свой скилл алхимии и продавать собственные зелья и алхимические субстанции!</p>
      <input type="text" id="playerNameInput" placeholder="Введи своё имя, Алхимик!"><br>
      <button id="startGameBtn">Начать приключение</button>
      <p id="errorMessage" style="color: red; display: none;">Ты не представился, Алхимик! Назови своё имя.</p>
      `;
    screen.style.display = 'block';
    const button = document.getElementById('startGameBtn');
    if (button) {
        button.addEventListener('click', startGame);
    }
  }
}
// Эта функция обрабатывает нажатие на кнопку "Начать приключение"
function startGame() {
    const input = document.getElementById('playerNameInput');  
    const errorMsg = document.getElementById('errorMessage');
    if (!input) return;
    const rawName = input.value.trim();
    // Проверка на пустое имя
    if (rawName === '') {
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }
    // Делаем первую букву заглавной
    const playerName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
    // Сохраняем имя в глобальный объект
    window.gameState.playerName = playerName;
    // Прячем главное меню
    const screen = document.getElementById('screen-main-menu');
    if (screen) screen.style.display = 'none';
}

export function returnMainMenu() {
    const openMainMenu = document.getElementById('screen-main-menu');
    if (openMainMenu) {
      openMainMenu.style.display = 'block';
    }
}
