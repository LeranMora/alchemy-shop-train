export function returnMainMenu() {
  const openMainMenu = document.getElementByIf('main-menu-wn');
  if (openMainMenu) {
    openMainMenu.style.display = 'block';
  }
}
