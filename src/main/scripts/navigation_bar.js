document.addEventListener('DOMContentLoaded', function() {
    const dictationsLink = document.querySelector('.nav-link.has-submenu');
    const dictationsMenu = document.getElementById('dictations-menu');

    dictationsLink.addEventListener('click', function(event) {
        if (window.innerWidth > 768) return;

        event.preventDefault();
        event.stopPropagation();

        const isOpen = dictationsMenu.classList.contains('mobile-open');

        if (isOpen) {
            dictationsMenu.classList.remove('mobile-open');
            dictationsLink.classList.remove('mobile-open');
        } else {
            dictationsMenu.classList.add('mobile-open');
            dictationsLink.classList.add('mobile-open');
        }
    });

    document.addEventListener('click', function(event) {
        if (window.innerWidth > 768) return;

        const isOpen = dictationsMenu.classList.contains('mobile-open');
        if (!isOpen) return;

        if (!dictationsMenu.contains(event.target) && event.target !== dictationsLink) {
            dictationsMenu.classList.remove('mobile-open');
            dictationsLink.classList.remove('mobile-open');
        }
    });
});
