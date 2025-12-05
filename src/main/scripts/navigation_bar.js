document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.dictations-link');
    const pluralLink = document.querySelector('.plural-link');
    const spellingLink = document.querySelector('.spelling-link');

    // Функция для определения правильного пути (оставляем как есть)
    function getCorrectPath(targetPage) {
        const currentPath = window.location.pathname;
        const isInGame2 = currentPath.includes('/game_2/');
        const isInGame3 = currentPath.includes('/game_3/');
        const isInMain = currentPath.includes('/main/');
        const isIndex = currentPath.endsWith('/index.html') || currentPath.endsWith('/') || currentPath === '';

        if (isInGame3) {
            if (targetPage === 'dictations') {
                return '../../dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return '../game_2/plural_game_mobile_menu.html';
            } else if (targetPage === 'spelling') {
                return '#';
            }
        } else if (isInGame2) {
            if (targetPage === 'dictations') {
                return '../dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return 'plural_game_mobile_menu.html';
            } else if (targetPage === 'spelling') {
                return '../game_3/vocabulary_game.html';
            }
        } else if (isInMain) {
            if (targetPage === 'dictations') {
                return 'dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './game_2/plural_game_mobile_menu.html';
            } else if (targetPage === 'spelling') {
                return './game_3/vocabulary_game.html';
            }
        } else if (isIndex) {
            if (targetPage === 'dictations') {
                return './main/html/dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './main/html/game_2/plural_game_mobile_menu.html';
            } else if (targetPage === 'spelling') {
                return './main/html/game_3/vocabulary_game.html';
            }
        } else {
            if (targetPage === 'dictations') {
                return './main/html/dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './main/html/game_2/plural_game_mobile_menu.html';
            } else if (targetPage === 'spelling') {
                return './main/html/game_3/vocabulary_game.html';
            }
        }

        return '#';
    }

    // Обработчики для мобильной навигации (оставляем как есть)
    if (dictationsLink) {
        dictationsLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();
                const menuPath = getCorrectPath('dictations');
                if (menuPath !== '#') {
                    window.location.href = menuPath;
                }
            }
        });
    }

    if (pluralLink) {
        pluralLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();
                const menuPath = getCorrectPath('plural');
                if (menuPath !== '#') {
                    window.location.href = menuPath;
                }
            }
        });
    }

    if (spellingLink) {
        spellingLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();
                const menuPath = getCorrectPath('spelling');
                if (menuPath !== '#') {
                    window.location.href = menuPath;
                }
            }
        });
    }

    // При загрузке страницы проверяем сохраненные наборы
    if (window.location.pathname.includes('plural_game.html')) {
        const savedSet = localStorage.getItem('selectedWordSet');
        if (savedSet && window.game && typeof window.game.loadWordSet === 'function') {
            setTimeout(() => {
                window.game.loadWordSet(savedSet);
            }, 100);
        }
    }
});

// ОБРАБОТКА КЛИКОВ ПО ССЫЛКАМ ВСЕХ ИГР
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
            gamePath = `../game_2/plural_game.html`;
        } else if (currentPage.includes('/game_2/')) {
            gamePath = `plural_game.html`;
        } else if (currentPage.includes('/main/')) {
            gamePath = `./game_2/plural_game.html`;
        } else if (currentPage.endsWith('/index.html') || currentPage.endsWith('/') || currentPage === '') {
            gamePath = `./main/html/game_2/plural_game.html`;
        } else {
            gamePath = `./main/html/game_2/plural_game.html`;
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
            gamePath = `../game_3/vocabulary_game.html`;
        } else if (currentPage.includes('/game_3/')) {
            gamePath = `vocabulary_game.html`;
        } else if (currentPage.includes('/main/')) {
            gamePath = `./game_3/vocabulary_game.html`;
        } else if (currentPage.endsWith('/index.html') || currentPage.endsWith('/') || currentPage === '') {
            gamePath = `./main/html/game_3/vocabulary_game.html`;
        } else {
            gamePath = `./main/html/game_3/vocabulary_game.html`;
        }

        console.log('Переход по пути:', gamePath);
        window.location.href = gamePath;
    }
});

// Дополнительная отладка
if (window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '') {
    console.log('=== ОТЛАДКА ДЛЯ INDEX.HTML ===');
    console.log('Ссылки второй игры (data-set):', document.querySelectorAll('.nav-sublink[data-set]').length);
    console.log('Ссылки третьей игры (data-vocabulary-set):', document.querySelectorAll('[data-vocabulary-set]').length);

    // Показываем какие именно наборы есть
    document.querySelectorAll('.nav-sublink[data-set]').forEach(link => {
        console.log('Игра 2 - Набор:', link.getAttribute('data-set'), 'Текст:', link.textContent);
    });

    document.querySelectorAll('[data-vocabulary-set]').forEach(link => {
        console.log('Игра 3 - Набор:', link.getAttribute('data-vocabulary-set'), 'Текст:', link.textContent);
    });
}