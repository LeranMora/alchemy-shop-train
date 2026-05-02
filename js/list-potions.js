export function openRecipeBook() {
  const closeMainMenu = document.getElementById('main-menu-wn');
  if (closeMainMenu) {
    closeMainMenu.style.display = 'none';
  }
}
