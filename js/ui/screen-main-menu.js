export function showMainMenu() {
  const screen = document.getElementById('screen-main-menu');
  if (screen) {
    screen.innerHTML = `
      <div id="greeting">
        <h2>Добро пожаловать в «Мандрагору», молодой алхимик!</h2>
        <p>Это место - ваша личная лавка, где вы можете прокачивать свой скилл алхимии и продавать собственные зелья и алхимические субстанции!</p>
      </div>
      <div id="inputName">
        <input type="text" id="playerNameInput" placeholder="Введи своё имя, Алхимик!" style="text-align: center;">
        <button id="startGameBtn">Начать приключение</button>
        <p id="errorMessage" style="color: red; display: none;">Ты не представился, Алхимик! Назови своё имя.</p>
      </div>
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
    input.value = ''; // Очищаем текст внутри поля
    window.gameEvents.emit('switchScreen', 'game-hub');
    
    alert(`Добро пожаловать в Лавку, ${playerName}!`);
}

// Прячем главное меню, чтобы перейти на новый экран
export function hideMainMenu() {
  const screen = document.getElementById('screen-main-menu');
  const errorMsg = document.getElementById('errorMessage');
  const input = document.getElementById('playerNameInput');
    
  if (!screen) return;
    
  screen.style.display = 'none';
  if (input) input.value = ''; // Очищаем текст внутри поля
  if (errorMsg) errorMsg.style.display = 'none';
}
