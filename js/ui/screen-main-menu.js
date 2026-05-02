export function returnMainMenu() {
  const openMainMenu = document.getElementById('screen-main-menu');
  if (openMainMenu) {
    openMainMenu.style.display = 'block';
  }
}

export function showMainMenu() {
  const screen = document.getElementById('screen-main-menu');
  if (screen) {
    screen.innerHTML = `
      <h2>Добро пожаловать в "Мандрагору", молодой алхимик!</h2>
      <p>Это место - ваша личная лавка, где вы можете прокачивать свой скилл алхимии и продавать собственные зелья и алхимические субстанции!</p>
      <h3>Удачи в вашем приключении, Алхимик!</h3>
      <pre>
                
                
  o
   o
  o
 .-"-.
 /       \
 |  `  `  |
 \   ~   /
 '-----'
      </pre>
    `;
  screen.style.display = 'block';
  }
}
