document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.dictations-link');

    if (!dictationsLink) {
        console.log('Диктанты ссылка не найдена');
        return;
    }

    dictationsLink.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();

            const currentPage = window.location.pathname.split('/').pop();
            console.log('Текущая страница:', currentPage);

            let menuPath;
            if (currentPage && currentPage.startsWith('dictation_')) {
                // Страница диктанта
                menuPath = '../html/dictations_mobile_menu.html';
            } else {
                // Главная страница или другие страницы
                menuPath = './main/html/dictations_mobile_menu.html';
            }

            console.log('Переход на:', menuPath);
            window.location.href = menuPath;
        }
    });
});
