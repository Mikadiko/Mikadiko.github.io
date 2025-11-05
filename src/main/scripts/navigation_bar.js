document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.dictations-link');
    const pluralLink = document.querySelector('.plural-link');

    // Функция для определения правильного пути
    function getCorrectPath(targetPage) {
        const currentPath = window.location.pathname;
        const isInGame2 = currentPath.includes('/game_2/');
        const isInMain = currentPath.includes('/main/');

        console.log('Текущий путь:', currentPath);
        console.log('В game_2:', isInGame2);
        console.log('В main:', isInMain);

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
        } else {
            // На главной или в корне
            if (targetPage === 'dictations') {
                return './main/html/dictations_mobile_menu.html';
            } else if (targetPage === 'plural') {
                return './main/html/game_2/plural_game_mobile_menu.html';
            }
        }

        return '#';
    }

    // Обработчик для кнопки "Диктанты"
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

    // Обработчик для кнопки "Мн.ч. Р.п."
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