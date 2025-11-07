document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.dictations-link');
    const pluralLink = document.querySelector('.plural-link');

    // Функция для определения правильного пути
    function getCorrectPath(targetPage) {
        const currentPath = window.location.pathname;
        const isInGame2 = currentPath.includes('/game_2/');
        const isInMain = currentPath.includes('/main/');
        const isIndex = currentPath.endsWith('/index.html') || currentPath.endsWith('/') || currentPath === '';

        console.log('Текущий путь:', currentPath);
        console.log('В game_2:', isInGame2);
        console.log('В main:', isInMain);
        console.log('На index:', isIndex);

        if (isInGame2) {
            // Находимся в папке game_2
            if (targetPage === 'dictations') {
                return '../dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return 'plural_game_mobile_menu.html';
            }
        } else if (isInMain) {
            // Находимся в папке main
            if (targetPage === 'dictations') {
                return 'dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './game_2/plural_game_mobile_menu.html';
            }
        } else if (isIndex) {
            // Находимся на главной странице (index.html)
            if (targetPage === 'dictations') {
                return './main/html/dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './main/html/game_2/plural_game_mobile_menu.html';
            }
        } else {
            // На других страницах в корне
            if (targetPage === 'dictations') {
                return './main/html/dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './main/html/game_2/plural_game_mobile_menu.html';
            }
        }

        return '#';
    }

    // Обработчик для кнопки "Диктанты" (мобильная версия)
    if (dictationsLink) {
        dictationsLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();

                const menuPath = getCorrectPath('dictations');
                console.log('Переход в диктанты:', menuPath);

                if (menuPath !== '#') {
                    window.location.href = menuPath;
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

// ОБРАБОТКА КЛИКОВ ПО ССЫЛКАМ НА ВТОРУЮ ИГРУ (ДЕСКТОП И МОБИЛЬНАЯ)
document.addEventListener('click', function(e) {
    const pluralLink = e.target.closest('.nav-sublink[data-set]');

    if (pluralLink) {
        e.preventDefault();
        e.stopPropagation();

        const setName = pluralLink.getAttribute('data-set');
        console.log('=== НАВИГАЦИЯ ВО ВТОРУЮ ИГРУ ===');
        console.log('Выбран набор:', setName);
        console.log('Текущая страница:', window.location.pathname);

        // Сохраняем выбранный набор в localStorage
        localStorage.setItem('selectedWordSet', setName);

        // Формируем правильный путь к странице второй игры
        let gamePath;
        const currentPage = window.location.pathname;

        console.log('Определяем путь из:', currentPage);

        if (currentPage.includes('/game_2/')) {
            // Уже находимся в папке game_2
            gamePath = `plural_game.html?set=${setName}`;
            console.log('Сценарий 1: Уже в game_2');
        } else if (currentPage.includes('/main/')) {
            // Находимся в папке main (страницы первой игры)
            gamePath = `./game_2/plural_game.html?set=${setName}`;
            console.log('Сценарий 2: В папке main');
        } else if (currentPage.endsWith('/index.html') || currentPage.endsWith('/') || currentPage === '') {
            // Находимся на главной странице (index.html)
            gamePath = `./main/html/game_2/plural_game.html?set=${setName}`;
            console.log('Сценарий 3: На главной странице');
        } else {
            // На других страницах в корне
            gamePath = `./main/html/game_2/plural_game.html?set=${setName}`;
            console.log('Сценарий 4: В корне проекта');
        }

        console.log('Переход по пути:', gamePath);
        window.location.href = gamePath;
    }
});

// Дополнительная отладка для index.html
if (window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '') {
    console.log('=== ОТЛАДКА ДЛЯ INDEX.HTML ===');
    console.log('Навигационные ссылки найдены:', document.querySelectorAll('.nav-sublink[data-set]').length);

    // Проверяем, что ссылки существуют и имеют правильные data-атрибуты
    document.querySelectorAll('.nav-sublink[data-set]').forEach(link => {
        console.log('Ссылка:', link.textContent, 'data-set:', link.getAttribute('data-set'));
    });
}