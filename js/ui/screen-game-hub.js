export function openGameHub() {
  const screenHeader = document.getElementById('header-game-hub');
  if (screenHeader) {
    screenHeader.innerHTML = `
    <button id="save-game" class="layout-btn" style="display:none">Сохранить игру</button>
    <button id="load-game" class="layout-btn" style="display:none">Удалить игру</button>
    <button id="main-menu-btn" class="layout-btn" style="display:none">Главное меню</button>
    `;
    screenHeader.style.display = 'block';
  }
}
export function returnMainMenu() {
    const openMainMenu = document.getElementById('screen-main-menu');
    const errorMsg = document.getElementById('errorMessage');
    const playerInput = document.getElementById('playerNameInput');
    if (openMainMenu && errorMsg) {
      openMainMenu.style.display = 'block';
      errorMsg.style.display = 'none';
      playerInput.value = ''; // Очищаем текст внутри поля
    }
}
