const screenHeader = document.getElementById('header-game-hub');
const screenFooter = document.getElementById('footer-game-hub');
export function openGameHub() {
  screenHeader.innerHTML = `
  <button id="save-game" class="layout-btn">Сохранить игру</button>
  <button id="load-game" class="layout-btn">Удалить игру</button>
  <button id="main-menu-btn" class="layout-btn">Главное меню</button>
  `;
  screenFooter.innerHTML = `
  <div>
  <div>lvl: 0 (0 / 100)</div>
    <div>Gold: 100</div>
</div>
<div>
  <div>Репутация лавки: 0</div>
  <div>✾ Чистота лавки ✾: 0</div>
</div>
  `;
  screenHeader.style.display = 'grid';
  screenFooter.style.display = 'grid';
  const returnBtn = document.getElementById('main-menu-btn');
    if (returnBtn) {
      returnBtn.addEventListener('click', returnMainMenu);
    }
  }

export function returnMainMenu() {
  const openMainMenu = document.getElementById('screen-main-menu');
  const errorMsg = document.getElementById('errorMessage');
  const playerInput = document.getElementById('playerNameInput');
    
  if (!openMainMenu || !errorMsg || !playerInput) return;
    
  openMainMenu.style.display = 'block';
  errorMsg.style.display = 'none';
  playerInput.value = ''; // Очищаем текст внутри поля
  screenHeader.style.display = 'none';
}

