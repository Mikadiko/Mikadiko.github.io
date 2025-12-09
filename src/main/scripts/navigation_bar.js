// navigation_bar.js - исправленная версия

// Функция для определения правильного пути - ВЫНЕСЕНА В ГЛОБАЛЬНУЮ ОБЛАСТЬ ВИДИМОСТИ
function getCorrectPath(targetPage) {
    const currentPath = window.location.pathname;
    const isInGame2 = currentPath.includes('/game_2/');
    const isInGame3 = currentPath.includes('/game_3/');
    const isInMain = currentPath.includes('/main/');
    const isIndex = currentPath.endsWith('/index.html') || currentPath.endsWith('/') || currentPath === '';
    const isDictationPage = currentPath.includes('dictation_');

    console.log('=== getCorrectPath DEBUG ===');
    console.log('Текущий путь:', currentPath);
    console.log('Цель:', targetPage);
    console.log('В game_2:', isInGame2);
    console.log('В game_3:', isInGame3);
    console.log('В main:', isInMain);
    console.log('На index:', isIndex);
    console.log('На dictation:', isDictationPage);

    // Для третьей игры (словарный диктант) - ИСПРАВЛЕНО
    if (isInGame3) {
        if (targetPage === 'dictations') {
            return '../dictations_mobile_menu.html'; // ОДИН уровень вверх
        } else if (targetPage === 'plural') {
            return '../game_2/plural_game_mobile_menu.html';
        } else if (targetPage === 'spelling') {
            return 'vocabulary_game_mobile_menu.html';
        }
    }
    // Для второй игры (множественное число)
    else if (isInGame2) {
        if (targetPage === 'dictations') {
            return '../dictations_mobile_menu.html';
        } else if (targetPage === 'plural') {
            return 'plural_game_mobile_menu.html';
        } else if (targetPage === 'spelling') {
            return '../game_3/vocabulary_game_mobile_menu.html';
        }
    }
    // Для страниц диктантов (dictation_2.html, dictation_3.html, ...)
    else if (isDictationPage && isInMain) {
        // Находимся в папке main на странице диктанта
        if (targetPage === 'dictations') {
            return './dictations_mobile_menu.html';
        } else if (targetPage === 'plural') {
            return './game_2/plural_game_mobile_menu.html';
        } else if (targetPage === 'spelling') {
            return './game_3/vocabulary_game_mobile_menu.html';
        }
    }
    // Для папки main (но не на странице диктанта)
    else if (isInMain) {
        if (targetPage === 'dictations') {
            return './dictations_mobile_menu.html';
        } else if (targetPage === 'plural') {
            return './game_2/plural_game_mobile_menu.html';
        } else if (targetPage === 'spelling') {
            return './game_3/vocabulary_game_mobile_menu.html';
        }
    }
    // Для главной страницы (index.html) - первая игра
    else if (isIndex) {
        if (targetPage === 'dictations') {
            return './main/dictations_mobile_menu.html';
        } else if (targetPage === 'plural') {
            return './main/html/game_2/plural_game_mobile_menu.html';
        } else if (targetPage === 'spelling') {
            return './main/html/game_3/vocabulary_game_mobile_menu.html';
        }
    }
    // Для других случаев (страницы в корне)
    else {
        if (targetPage === 'dictations') {
            return './main/dictations_mobile_menu.html';
        } else if (targetPage === 'plural') {
            return './main/html/game_2/plural_game_mobile_menu.html';
        } else if (targetPage === 'spelling') {
            return './main/html/game_3/vocabulary_game_mobile_menu.html';
        }
    }

    return '#';
}

document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.dictations-link');
    const pluralLink = document.querySelector('.plural-link');
    const spellingLink = document.querySelector('.spelling-link');

    // Обработчик для кнопки "Диктанты" (мобильная версия)
    if (dictationsLink) {
        dictationsLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();

                const menuPath = getCorrectPath('dictations');
                console.log('Переход в диктанты:', menuPath);

                if (menuPath !== '#') {
                    console.log('Пытаемся перейти по пути:', menuPath);
                    window.location.href = menuPath;
                } else {
                    console.error('Не удалось определить путь для dictations');
                }
            }
        });
    }

    // Обработчик для кнопки "Мн.ч. Р.п." (мобильная версия)
    if (pluralLink) {
        pluralLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();

                const menuPath = getCorrectPath('plural');
                console.log('Переход в мн.ч.:', menuPath);

                if (menuPath !== '#') {
                    window.location.href = menuPath;
                }
            }
        });
    }

    // Обработчик для кнопки "Словарный диктант" (мобильная версия)
    if (spellingLink) {
        spellingLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();

                const menuPath = getCorrectPath('spelling');
                console.log('Переход в словарный диктант:', menuPath);

                if (menuPath !== '#') {
                    window.location.href = menuPath;
                }
            }
        });
    }

    // При загрузке страницы проверяем, нужно ли загрузить сохраненный набор
    if (window.location.pathname.includes('plural_game.html')) {
        const savedSet = localStorage.getItem('selectedWordSet');
        if (savedSet && window.game && typeof window.game.loadWordSet === 'function') {
            setTimeout(() => {
                window.game.loadWordSet(savedSet);
            }, 100);
        }
    }
});

// ОБРАБОТКА КЛИКОВ ПО ССЫЛКАМ ВСЕХ ИГР (ДЕСКТОП И МОБИЛЬНАЯ)
document.addEventListener('click', function(e) {
    // 1. Ссылки на ВТОРУЮ игру (множественное число) - используем data-set
    const wordsSetLink = e.target.closest('.nav-sublink[data-set]');

    // 2. Ссылки на ТРЕТЬЮ игру (словарный диктант) - используем data-vocabulary-set
    const vocabularySetLink = e.target.closest('[data-vocabulary-set]');

    if (wordsSetLink && wordsSetLink.hasAttribute('data-set')) {
        // ОБРАБОТКА ССЫЛОК ВТОРОЙ ИГРЫ
        e.preventDefault();
        e.stopPropagation();

        const setName = wordsSetLink.getAttribute('data-set');
        console.log('=== НАВИГАЦИЯ ВО ВТОРУЮ ИГРУ ===');
        console.log('Выбран набор:', setName);

        // Сохраняем выбранный набор
        localStorage.setItem('selectedWordSet', setName);

        // Формируем путь
        let gamePath;
        const currentPage = window.location.pathname;

        if (currentPage.includes('/game_3/')) {
            // Из третьей игры во вторую
            gamePath = '../game_2/plural_game.html';
            console.log('Сценарий: Из game_3 в game_2');
        } else if (currentPage.includes('/game_2/')) {
            // Уже в game_2
            gamePath = 'plural_game.html';
            console.log('Сценарий: Уже в game_2');
        } else if (currentPage.includes('/main/')) {
            // Из main в game_2
            gamePath = './game_2/plural_game.html';
            console.log('Сценарий: Из main в game_2');
        } else if (currentPage.endsWith('/index.html') || currentPage.endsWith('/') || currentPage === '') {
            // Из index.html в game_2
            gamePath = './main/html/game_2/plural_game.html';
            console.log('Сценарий: Из index.html в game_2');
        } else {
            // Из корня в game_2
            gamePath = './main/html/game_2/plural_game.html';
            console.log('Сценарий: Из корня в game_2');
        }

        console.log('Переход по пути:', gamePath);
        window.location.href = gamePath;
    }
    else if (vocabularySetLink) {
        // ОБРАБОТКА ССЫЛОК ТРЕТЬЕЙ ИГРЫ
        e.preventDefault();
        e.stopPropagation();

        const setName = vocabularySetLink.getAttribute('data-vocabulary-set');
        console.log('=== НАВИГАЦИЯ В ТРЕТЬЮ ИГРУ ===');
        console.log('Выбран набор словарного диктанта:', setName);

        // Сохраняем выбранный набор
        localStorage.setItem('selectedVocabularySet', setName);

        // Формируем путь
        let gamePath;
        const currentPage = window.location.pathname;

        if (currentPage.includes('/game_2/')) {
            // Из второй игры в третью
            gamePath = '../game_3/vocabulary_game.html';
            console.log('Сценарий: Из game_2 в game_3');
        } else if (currentPage.includes('/game_3/')) {
            // Уже в game_3
            gamePath = 'vocabulary_game.html';
            console.log('Сценарий: Уже в game_3');
        } else if (currentPage.includes('/main/')) {
            // Из main в game_3
            gamePath = './game_3/vocabulary_game.html';
            console.log('Сценарий: Из main в game_3');
        } else if (currentPage.endsWith('/index.html') || currentPage.endsWith('/') || currentPage === '') {
            // Из index.html в game_3
            gamePath = './main/html/game_3/vocabulary_game.html';
            console.log('Сценарий: Из index.html в game_3');
        } else {
            // Из корня в game_3
            gamePath = './main/html/game_3/vocabulary_game.html';
            console.log('Сценарий: Из корня в game_3');
        }

        console.log('Переход по пути:', gamePath);
        window.location.href = gamePath;
    }
});

// Отладочная функция
window.debugNavigation = function() {
    const currentPath = window.location.pathname;
    console.log('=== ОТЛАДКА НАВИГАЦИИ ===');
    console.log('Текущий путь:', currentPath);
    console.log('Referrer:', document.referrer);
    console.log('В game_2:', currentPath.includes('/game_2/'));
    console.log('В game_3:', currentPath.includes('/game_3/'));
    console.log('В main:', currentPath.includes('/main/'));
    console.log('На index:', currentPath.endsWith('/index.html') || currentPath.endsWith('/') || currentPath === '');
    console.log('На dictation:', currentPath.includes('dictation_'));

    // Тестируем пути
    console.log('Путь к диктантам:', getCorrectPath('dictations'));
    console.log('Путь к мн.числу:', getCorrectPath('plural'));
    console.log('Путь к словарному:', getCorrectPath('spelling'));
};

// Добавляем функцию в глобальную область видимости для отладки
window.getCorrectPath = getCorrectPath;