// Обработка выбора набора слов
document.addEventListener('DOMContentLoaded', function() {
    const wordSetLinks = document.querySelectorAll('.word-set-link');

    wordSetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const setName = this.getAttribute('data-set');
            console.log('Выбран набор:', setName);

            // Сохраняем выбранный набор в localStorage
            localStorage.setItem('selectedWordSet', setName);

            // Определяем правильный путь для перехода
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

            console.log('Переход на:', gamePath);
            window.location.href = gamePath;
        });
    });

    // Добавляем отладочную информацию
    console.log('Текущий URL:', window.location.href);
    console.log('Текущая папка:', window.location.pathname);
});