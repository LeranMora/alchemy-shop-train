const screenHeader = document.getElementById('header-game-hub');
export function openGameHub() {
  if (screenHeader) {
    screenHeader.innerHTML = `
    <button id="save-game" class="layout-btn">Сохранить игру</button>
    <button id="load-game" class="layout-btn">Удалить игру</button>
    <button id="main-menu-btn" class="layout-btn">Главное меню</button>
    `;
    screenHeader.style.display = 'grid';
    const returnBtn = document.getElementById('main-menu-btn');
        if (returnBtn) {
            returnBtn.addEventListener('click', returnMainMenu);
        }
  }
}
export function returnMainMenu() {
    const openMainMenu = document.getElementById('screen-main-menu');
    const errorMsg = document.getElementById('errorMessage');
    const playerInput = document.getElementById('playerNameInput');
    console.log('Нашли элемент с вводом имени');
    if (openMainMenu && errorMsg && screenHeader) {
      openMainMenu.style.display = 'block';
      errorMsg.style.display = 'none';
      playerInput.value = ''; // Очищаем текст внутри поля
      screenHeader.style.display = 'none';
    }
}
