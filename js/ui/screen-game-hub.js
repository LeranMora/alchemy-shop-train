export function openGameHub() {
  const screenHeader = document.getElementById('header-game-hub');
  if (screenHeader) {
    screenHeader.innerHTML = `
    <button id="save-game" class="layout-btn" style="display:none">Сохранить игру</button>
    <button id="load-game" class="layout-btn" style="display:none">Загрузить игру</button>
    <button id="list-menu" class="layout-btn" style="display:none">Книга рецептов</button>
    <button id="statistics-game" class:"layout-btn" style="display:none">Статистика</button>
    `;
  }
}
