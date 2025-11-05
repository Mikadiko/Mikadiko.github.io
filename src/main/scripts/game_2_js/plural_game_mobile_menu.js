// Обработка выбора набора слов и кнопки назад
document.addEventListener('DOMContentLoaded', function() {
    const wordSetLinks = document.querySelectorAll('.word-set-link');
    const backButton = document.getElementById('backButton') || document.querySelector('.back-button');

    // Функция для определения адреса возврата (на случай если истории браузера нет)
    function getFallbackUrl() {
        const currentPath = window.location.pathname;
        console.log('Текущий путь для определения fallback:', currentPath);

        if (currentPath.includes('/game_2/')) {
            // Если находимся в папке game_2
            return '../dictations_mobile_menu.html';
        } else if (currentPath.includes('/main/')) {
            // Если находимся в папке main
            return '../../dictations_mobile_menu.html';
        } else {
            // По умолчанию
            return './dictations_mobile_menu.html';
        }
    }

    // Обработчик для кнопки "Назад"
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();

            console.log('Нажата кнопка "Назад"');
            console.log('Длина истории браузера:', window.history.length);
            console.log('Referrer (предыдущая страница):', document.referrer);

            // Проверяем, можно ли использовать history.back()
            if (window.history.length > 1 && document.referrer && document.referrer !== '') {
                console.log('Возвращаемся через history.back()');
                window.history.back();
            } else {
                // Используем fallback URL
                const fallbackUrl = getFallbackUrl();
                console.log('Используем fallback URL:', fallbackUrl);
                window.location.href = fallbackUrl;
            }
        });
    }

    // Обработчики для выбора наборов слов
    wordSetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const setName = this.getAttribute('data-set');
            console.log('Выбран набор:', setName);

            // Сохраняем выбранный набор в localStorage
            localStorage.setItem('selectedWordSet', setName);

            // Определяем правильный путь для перехода на страницу игры
            const currentPath = window.location.pathname;
            let gamePath;

            if (currentPath.includes('/game_2/')) {
                // Уже в папке game_2
                gamePath = `plural_game.html?set=${setName}`;
            } else if (currentPath.includes('/main/')) {
                // В папке main
                gamePath = `./game_2/plural_game.html?set=${setName}`;
            } else {
                // В корне или других местах
                gamePath = `./main/html/game_2/plural_game.html?set=${setName}`;
            }

            console.log('Переход на страницу игры:', gamePath);
            window.location.href = gamePath;
        });
    });

    // Отладочная информация
    console.log('=== plural_game_mobile_menu.js загружен ===');
    console.log('Текущий URL:', window.location.href);
    console.log('Текущая папка:', window.location.pathname);
    console.log('Referrer:', document.referrer);
    console.log('Длина истории:', window.history.length);
});