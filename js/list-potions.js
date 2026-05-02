export function openRecipeBook() {
  mainMenu.style.display = 'none';
  const ingredients = [
    { id: 'rose', name: 'Лепестки роз', price: 7 },
    { id: 'moon-dust', name: 'Лунная пыльца', price: 5 },
    { id: 'unicorn-tear', name: 'Слеза единорога', price: 10 },
    { id: 'aloe', name: 'Сок алоэ', price: 7 },
    { id: 'mandrake', name: 'Корень мандрагоры', price: 5 },
    { id: 'spring-water', name: 'Родниковая вода', price: 3 },
    { id: 'honey', name: 'Мёд', price: 7 },
    { id: 'soap-root', name: 'Мыльный корень', price: 7 },
    { id: 'lemon-juice', name: 'Лимонный сок', price: 3 },
    { id: 'crystal-salt', name: 'Кристальная соль', price: 5 },
    { id: 'sun-drop', name: 'Капля солнца', price: 10 },
    { id: 'firefly', name: 'Пыльца светлячков', price: 7 },
    { id: 'glow-mushroom', name: 'Люминесцентный гриб', price: 5 }
  ];
  
  const potions = [
    {
      id: 'love',
      name: 'Зелье Любви', 
      description: 'Помогает в делах сердечных, возвращает утерянную любовь.', 
      price: 50,
      ingredients: [
        { id: 'rose', quantity: 2 },
        { id: 'moon-dust', quantity: 1 },
        { id: 'unicorn-tear', quantity: 1 }
      ]
    },
    {
      id: 'health',
      name: 'Зелье Здоровья',
      description: 'Исцеляет от недугов и болезней.',
      price: 30,
      ingredients: [
        { id: 'aloe', quantity: 1 },
        { id: 'mandrake', quantity: 2 },
        { id: 'spring-water', quantity: 1 }
      ]
    },
    {
      id: 'oratory',
      name: 'Зелье Красноречия',
      description: 'Язык заплетается в красивые фразы.',
      price: 20,
      ingredients: [
        { id: 'honey', quantity: 1 },
        { id: 'moon-dust', quantity: 1 }
      ]
    }
  ];

  const substances = [
    {
      id: 'clean',
      name: 'Субстанция Очищения', 
      description: 'Убирает с поверхности грязь и ржавчину.', 
      price: 20,
      ingredients: [
        { id: 'soap-root', quantity: 1 },
        { id: 'lemon-juice', quantity: 2 },
        { id: 'crystal-salt', quantity: 1 }
      ]
    },
    {
      id: 'growth',
      name: 'Субстанция Роста', 
      description: 'Ускоряет рост растений.', 
      price: 30,
      ingredients: [
        { id: 'rose', quantity: 1 },
        { id: 'spring-water', quantity: 1 },
        { id: 'sun-drop', quantity: 1 }
      ]
    },
    {
      id: 'light',
      name: 'Субстанция Света', 
      description: 'Жидкий свет, заменяет факелы, освещает путь.', 
      price: 50,
      ingredients: [
        { id: 'firefly', quantity: 1 },
        { id: 'glow-mushroom', quantity: 2 },
        { id: 'sun-drop', quantity: 1 }
      ]
    }
  ];


}
