export function openRecipeBook() {
  const closeMainMenu = document.getElementById('screen-main-menu');
  if (closeMainMenu) {
    closeMainMenu.style.display = 'none';
  }
}
