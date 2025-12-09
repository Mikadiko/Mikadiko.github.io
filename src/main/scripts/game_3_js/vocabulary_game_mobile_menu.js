// vocabulary_game_mobile_menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик кнопки "Назад"
    const backButton = document.getElementById('backButton');

    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Проверяем, есть ли предыдущая страница в истории
            if (document.referrer && document.referrer !== window.location.href) {
                // Возвращаемся на предыдущую страницу
                window.history.back();
            } else {
                // Если нет истории или это первая страница, определяем путь по текущему местоположению
                const currentPath = window.location.pathname;
                let backPath;

                console.log('Текущий путь для back:', currentPath);

                if (currentPath.includes('/game_3/')) {
                    // Находимся в папке game_3 - возвращаемся к игре
                    backPath = './vocabulary_game.html';
                } else if (currentPath.includes('/main/')) {
                    // Находимся в main - возвращаемся на главную страницу игр
                    backPath = './index.html';
                } else {
                    // По умолчанию возвращаемся на один уровень выше
                    backPath = '../';
                }

                console.log('Возврат по пути:', backPath);
                window.location.href = backPath;
            }
        });
    }

    // Обработчик кликов по ссылкам наборов
    const wordSetLinks = document.querySelectorAll('.word-set-link[data-vocabulary-set]');

    wordSetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const wordSetName = this.getAttribute('data-vocabulary-set');

            if (wordSetName) {
                // Сохраняем выбранный набор в localStorage
                localStorage.setItem('selectedVocabularySet', wordSetName);

                // Добавляем набор в URL как параметр
                const url = new URL('./vocabulary_game.html', window.location.href);
                url.searchParams.set('set', wordSetName);

                console.log('Переход в словарный диктант:', url.toString());
                window.location.href = url.toString();
            }
        });
    });

    // Устанавливаем активную ссылку на текущий сохраненный набор
    const savedSet = localStorage.getItem('selectedVocabularySet') || 'vocabulary_set_1';
    const currentLink = document.querySelector(`.word-set-link[data-vocabulary-set="${savedSet}"]`);

    if (currentLink) {
        currentLink.classList.add('active');
    }

    // Также обновляем navigation_bar.js для мобильного меню
    setupNavigationForMobileMenu();
});

// Функция для настройки навигации из мобильного меню
function setupNavigationForMobileMenu() {
    // Если мы в мобильном меню, можем добавить дополнительную логику
    console.log('Мобильное меню словарного диктанта загружено');

    // Проверяем, есть ли параметр set в URL
    const urlParams = new URLSearchParams(window.location.search);
    const setFromUrl = urlParams.get('set');

    if (setFromUrl) {
        // Если есть параметр в URL, сохраняем его и сразу переходим
        localStorage.setItem('selectedVocabularySet', setFromUrl);

        // Обновляем активную ссылку
        const currentLink = document.querySelector(`.word-set-link[data-vocabulary-set="${setFromUrl}"]`);
        const allLinks = document.querySelectorAll('.word-set-link');

        allLinks.forEach(link => link.classList.remove('active'));
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
}