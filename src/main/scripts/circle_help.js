document.querySelectorAll('.help-circle').forEach(circle => {
    let tooltip = null;
    let tooltipArrow = null;

    circle.addEventListener('mouseenter', function(e) {
        // Создаем подсказку
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');

        // Создаем стрелочку
        tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'tooltip-arrow';

        document.body.appendChild(tooltip);
        document.body.appendChild(tooltipArrow);

        // Позиционируем подсказку
        positionTooltip(this, tooltip, tooltipArrow);
    });

    circle.addEventListener('mouseleave', function() {
        if (tooltip) {
            tooltip.remove();
            tooltip = null;
        }
        if (tooltipArrow) {
            tooltipArrow.remove();
            tooltipArrow = null;
        }
    });

    circle.addEventListener('mousemove', function(e) {
        if (tooltip) {
            positionTooltip(this, tooltip, tooltipArrow);
        }
    });
});

function positionTooltip(element, tooltip, arrow) {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Отступы от краев экрана
    const margin = 10;

    // Позиция элемента
    const elementTop = rect.top + window.scrollY;
    const elementLeft = rect.left + window.scrollX;
    const elementCenterX = elementLeft + rect.width / 2;
    const elementCenterY = elementTop + rect.height / 2;

    // Доступное пространство
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Пробуем разные позиции по порядку
    let positions = [
        { pos: 'top', x: elementCenterX - tooltipRect.width / 2, y: elementTop - tooltipRect.height - 10 },
        { pos: 'bottom', x: elementCenterX - tooltipRect.width / 2, y: elementTop + rect.height + 10 },
        { pos: 'left', x: elementLeft - tooltipRect.width - 10, y: elementCenterY - tooltipRect.height / 2 },
        { pos: 'right', x: elementLeft + rect.width + 10, y: elementCenterY - tooltipRect.height / 2 }
    ];

    // Находим первую позицию, которая влезает в экран
    let bestPosition = positions.find(pos =>
        pos.x >= margin &&
        pos.x + tooltipRect.width <= viewportWidth - margin &&
        pos.y >= margin &&
        pos.y + tooltipRect.height <= viewportHeight - margin
    );

    // Если ни одна позиция не подходит, прижимаем к краям
    if (!bestPosition) {
        bestPosition = positions[0]; // По умолчанию сверху

        // Корректируем координаты
        bestPosition.x = Math.max(margin, Math.min(bestPosition.x, viewportWidth - tooltipRect.width - margin));
        bestPosition.y = Math.max(margin, Math.min(bestPosition.y, viewportHeight - tooltipRect.height - margin));
    }

    // Устанавливаем позицию подсказки
    tooltip.style.left = bestPosition.x + 'px';
    tooltip.style.top = bestPosition.y + 'px';

    // Позиционируем стрелочку
    positionArrow(arrow, bestPosition.pos, elementCenterX, elementCenterY, tooltipRect);
}

function positionArrow(arrow, position, elementX, elementY, tooltipRect) {
    const arrowSize = 6;

    switch (position) {
        case 'top':
            arrow.style.left = (elementX - arrowSize) + 'px';
            arrow.style.top = (parseFloat(tooltipRect.top) + tooltipRect.height) + 'px';
            arrow.style.borderTopColor = '#333';
            arrow.style.borderBottomColor = 'transparent';
            arrow.style.borderLeftColor = 'transparent';
            arrow.style.borderRightColor = 'transparent';
            break;

        case 'bottom':
            arrow.style.left = (elementX - arrowSize) + 'px';
            arrow.style.top = (parseFloat(tooltipRect.top) - arrowSize * 2) + 'px';
            arrow.style.borderBottomColor = '#333';
            arrow.style.borderTopColor = 'transparent';
            arrow.style.borderLeftColor = 'transparent';
            arrow.style.borderRightColor = 'transparent';
            break;

        case 'left':
            arrow.style.left = (parseFloat(tooltipRect.left) + tooltipRect.width) + 'px';
            arrow.style.top = (elementY - arrowSize) + 'px';
            arrow.style.borderLeftColor = '#333';
            arrow.style.borderRightColor = 'transparent';
            arrow.style.borderTopColor = 'transparent';
            arrow.style.borderBottomColor = 'transparent';
            break;

        case 'right':
            arrow.style.left = (parseFloat(tooltipRect.left) - arrowSize * 2) + 'px';
            arrow.style.top = (elementY - arrowSize) + 'px';
            arrow.style.borderRightColor = '#333';
            arrow.style.borderLeftColor = 'transparent';
            arrow.style.borderTopColor = 'transparent';
            arrow.style.borderBottomColor = 'transparent';
            break;
    }
}