export function openGameHub() {
  const screenHeader = document.getElementById('header-game-hub');
  if (screenHeader) {
    screenHeader.innerHTML = `
    <button id="save-game" class="layout-btn">Сохранить игру</button>
    <button id="load-game" class="layout-btn">Удалить игру</button>
    <button id="main-menu-btn" class="layout-btn">Главное меню</button>
    `;
    screenHeader.style.display = 'grid';
  }
}
export function returnMainMenu() {
    console.log('Функция работает');
    const openMainMenu = document.getElementById('screen-main-menu');
    console.log('Нашли элемент Главного меню');
    const errorMsg = document.getElementById('errorMessage');
    console.log('Нашли Элемент с ошибкой');
    const playerInput = document.getElementById('playerNameInput');
    console.log('Нашли элемент с вводом имени');
    if (openMainMenu && errorMsg) {
      openMainMenu.style.display = 'block';
      errorMsg.style.display = 'none';
      playerInput.value = ''; // Очищаем текст внутри поля
    }
}
