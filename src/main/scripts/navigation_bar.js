document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.dictations-link');
    const pluralLink = document.querySelector('.plural-link');

    // Обработчик для кнопки "Диктанты"
    if (dictationsLink) {
        dictationsLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();

                const currentPage = window.location.pathname.split('/').pop();
                console.log('Текущая страница:', currentPage);

                let menuPath;
                if (currentPage && currentPage.startsWith('dictation_')) {
                    // Страница диктанта
                    menuPath = 'dictations_mobile_menu.html';
                } else {
                    // Главная страница или другие страницы
                    menuPath = './main/html/dictations_mobile_menu.html';
                }

                console.log('Переход на:', menuPath);
                window.location.href = menuPath;
            }
        });
    }

    // Обработчик для кнопки "Мн.ч. Р.п."
    if (pluralLink) {
        pluralLink.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                event.stopPropagation();

                const currentPage = window.location.pathname.split('/').pop();
                console.log('Текущая страница для мн.ч.:', currentPage);

                let menuPath;

                // Всегда переходим на страницу выбора наборов слов
                if (currentPage && currentPage.startsWith('dictation_')) {
                    // Со страницы диктанта
                    menuPath = './game_2/plural_game_mobile_menu.html';
                } else if (currentPage === 'index.html' || !currentPage) {
                    // С главной страницы
                    menuPath = './main/html/game_2/plural_game_mobile_menu.html';
                } else if (currentPage === 'plural_game.html') {
                    // Со страницы игры
                    menuPath = 'plural_game_mobile_menu.html';
                } else {
                    // С других страниц
                    menuPath = './game_2/plural_game_mobile_menu.html';
                }

                console.log('Переход на страницу выбора наборов:', menuPath);
                window.location.href = menuPath;
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