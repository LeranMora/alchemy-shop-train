// 1. Импортируем функцию в освном файле с кодом на кнопки, в переменную, чтобы она работала при клике (через if)
import { showMainMenu, hideMainMenu } from './ui/screen-main-menu.js'
import { showGameHub, hideGameHub } from './ui/screen-game-hub.js';

window.gameState = {
    playerName: ''
};

//точка приема сигналов на переключение экранов
window.gameEvents = {
    emit(eventName, data) {
        if (eventName === 'switchScreen') {
            switchScreen(data);
        }
    }
};

const screens = {
    'main-menu': { show: showMainMenu, hide: hideMainMenu },
    'game-hub': { show: showGameHub,  hide: hideGameHub }
}

let currentScreen = null;

function switchScreen(screenId) {
    if (currentScreen && screens[currentScreen]) {
        screens[currentScreen].hide();
    }
    
    if (screens[screenId]) {
        screens[screenId].show();
        currentScreen = screenId;
    }
}

// При загрузке — показать главное меню
document.addEventListener('DOMContentLoaded', () => {
    switchScreen('main-menu')
});
