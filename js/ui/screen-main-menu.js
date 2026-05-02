export function returnMainMenu() {
  const openMainMenu = document.getElementById('screen-main-menu');
  if (openMainMenu) {
    openMainMenu.style.display = 'block';
  }
}

export function showMainMenu() {
  console.log('showMainMenu вызвана!');
  const screen = document.getElementById('screen-main-menu');
  console.log('screen найден:', screen);
  if (screen) {
    screen.innerHTML = `
      <h2>Добро пожаловать в "Мандрагору", молодой алхимик!</h2>
      <p>Это место - ваша личная лавка, где вы можете прокачивать свой скилл алхимии и продавать собственные зелья и алхимические субстанции!</p>
      <h3>Удачи в вашем приключении, Алхимик!</h3>`;
    screen.style.display = 'block';
    console.log('Главное меню показано!');
  }
}
