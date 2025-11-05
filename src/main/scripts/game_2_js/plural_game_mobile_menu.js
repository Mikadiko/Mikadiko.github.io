// Обработка выбора набора слов
document.addEventListener('DOMContentLoaded', function() {
    const wordSetLinks = document.querySelectorAll('.word-set-link');

    wordSetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартный переход

            const setName = this.getAttribute('data-set');
            console.log('Выбран набор:', setName);

            // Сохраняем выбранный набор в localStorage
            localStorage.setItem('selectedWordSet', setName);

            // Переходим на страницу игры
            window.location.href = `plural_game.html?set=${setName}`;
        });
    });

    // Добавляем отладочную информацию
    console.log('Текущий URL:', window.location.href);
    console.log('Текущая папка:', window.location.pathname);
});