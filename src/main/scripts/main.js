// Получаем набор слов из data-атрибута скрипта
function getSetFromDataAttribute() {
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
        if (script.src.includes('main.js')) {
            return script.getAttribute('data-word-set') || 'set1';
        }
    }
    return 'set1';
}

const wordSets = {
    set1: [
        { word: "Анатом", correctPosition: 2 }, // Третья буква "а"
        { word: "Апостроф", correctPosition: 6 }, // Седьмая буква "о"
        { word: "Аэропорты", correctPosition: 5 }, // Шестая буква "о"
        { word: "Балованный", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Баловать", correctPosition: 5 }, // Шестая буква "а"
        { word: "Балуясь", correctPosition: 3 }, // Четвертая буква "у"
        { word: "Банты", correctPosition: 1 }, // Вторая буква "а"
        { word: "Бантом (Т.п)", correctPosition: 1 }, // Вторая буква "а"
        { word: "Бармен", correctPosition: 1 }, // Вторая буква "а"
        { word: "Благовест", correctPosition: 2 }, // Третья буква "а"
        { word: "Бомбардировать", correctPosition: 11 }, // Двенацатая буква "а"
        { word: "Бороду (В.п.)", correctPosition: 1 }, // Вторая буква "о"
        { word: "Брала", correctPosition: 4 }, // Пятая буква "а"
        { word: "Бунгало", correctPosition: 1 }, // Вторая буква "у"
        { word: "Бухгалтеров (Р.п.)", correctPosition: 4 }, // Пятая буква "а"
        { word: "Верба", correctPosition: 1 }, // Вторая буква "е"
        { word: "Верна", correctPosition: 4 }, // Пятая буква "а"
        { word: "Вероисповедание", correctPosition: 9 }, // Десятая буква "е"
        { word: "Вечеря", correctPosition: 1 }, // Вторая буква "е"
        { word: "Взяла", correctPosition: 4 }, // Пятая буква "а"
        { word: "Включен", correctPosition: 5 }, // Шестая буква "е"
        { word: "Включенный", correctPosition: 5 }, // Шестая буква "е"
        { word: "Включим", correctPosition: 5 }, // Шестая буква "и"
        { word: "Включит", correctPosition: 5 }, // Шестая буква "и"
        { word: "Включишь", correctPosition: 5 }, // Шестая буква "и"
        { word: "Влилась", correctPosition: 4 }, // Пятая буква "а"
        { word: "Вовремя", correctPosition: 1 }, // Вторая буква "о"
        { word: "Возрастов (Р.п.)", correctPosition: 7 }, // Восьмая буква "о"
        { word: "Ворвалась", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Восприняла", correctPosition: 9 }, // Десятая буква "а"
        { word: "Воссоздала", correctPosition: 9 }, // Десятая буква "а"
        { word: "Вручит", correctPosition: 4 }, // Пятая буква "и"
        { word: "Вручат", correctPosition: 4 }, // Пятая буква "а"
        { word: "Вручим", correctPosition: 4 }, // Пятая буква "и"
        { word: "Вреченный", correctPosition: 4 }, // Пятая буква "е"
        { word: "Вручена", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Всенощная", correctPosition: 2 }, // Третья буква "е"
        { word: "Генезис", correctPosition: 1 }, // Вторая буква "е"
        { word: "Герб", correctPosition: 1 }, // Вторая буква "е"
        { word: "Герба", correctPosition: 4 }, // Пятая буква "а"
        { word: "Гербом", correctPosition: 4 }, // Пятая буква "о"
        { word: "Гербовый", correctPosition: 1 }, // Вторая буква "е"
        { word: "Дабы", correctPosition: 3 }, // Четвертая буква "ы"
        { word: "Давнишний", correctPosition: 4 }, // Пятая буква "и"
        { word: "Деньги", correctPosition: 1 }, // Вторая буква "е"
        { word: "Деньгам", correctPosition: 5 }, // Шестая буква "а"
        { word: "Деньгами", correctPosition: 5 }, // Шестая буква "а"
        { word: "О деньгах", correctPosition: 7 }, // Восьмая буква "а"
        { word: "Дефис", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Де-Юре", correctPosition: 3 }, // Четвертая буква "ю"
        { word: "Диоптрия", correctPosition: 6 }, // Седьмая буква "и"
        { word: "Диспансер", correctPosition: 7 }, // Восьмая буква "е"
        { word: "Добела", correctPosition: 5 }, // Шестая буква "а"
        { word: "Добрала", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Добралась", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Доверху", correctPosition: 1 }, // Вторая буква "о"
        { word: "Догмат", correctPosition: 1 }, // Вторая буква "о"
        { word: "Договор", correctPosition: 5 }, // Шестая буква "о"
        { word: "Договоры", correctPosition: 5 }, // Шестая буква "о"
    ],
    set2: [
        { word: "Договорный", correctPosition: 5 }, // Шестая буква "о"
        { word: "Договоренность", correctPosition: 7 }, // Восьмая буква "е"
        { word: "Дождалась", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Дозвониться", correctPosition: 6 }, // Седьмая буква "и"
        { word: "Дозировать", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Докрасна", correctPosition: 7 }, // Восьмая буква "а"
        { word: "Документ", correctPosition: 5 }, // Шестая буква "е"
        { word: "Донельзя", correctPosition: 3 }, // Четвертая буква "е"
        { word: "Донизу", correctPosition: 1 }, // Вторая буква "о"
        { word: "Досуха", correctPosition: 1 }, // Вторая буква "о"
        { word: "Древко", correctPosition: 2 }, // Третья буква "е"
        { word: "Дремота", correctPosition: 4 }, // Пятая буква "о"
        { word: "Жалюзи", correctPosition: 5 }, // Шестая буква "и"
        { word: "Ждала", correctPosition: 4 }, // Пятая буква ""а
        { word: "Жерло (вулкана)", correctPosition: 4 }, // Пятая буква "о"
        { word: "Жернов", correctPosition: 1 }, // Вторая буква "е"
        { word: "Жилось", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Завидно", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Загодя", correctPosition: 1 }, // Вторая буква "а"
        { word: "Закупорить", correctPosition: 3 }, // Четвертая буква "у"
        { word: "Залил", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Залит", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Заливший", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Занял", correctPosition: 1 }, // Вторая буква "а"
        { word: "Заняла", correctPosition: 5 }, // Шестая буква "а"
        { word: "Занятый", correctPosition: 1 }, // Вторая буква "а"
        { word: "Занялся", correctPosition: 6 }, // Седьмая буква "я"
        { word: "Заперта", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Заплесневеть", correctPosition: 4 }, // Пятая буква "е"
        { word: "Запломбировать", correctPosition: 11 }, // Двенадцатая буква "а"
        { word: "Засветло", correctPosition: 1 }, // Вторая буква "а"
        { word: "Затемно", correctPosition: 1 }, // Вторая буква "а"
        { word: "Звала", correctPosition: 4 }, // Пятая буква "а"
        { word: "Звонит", correctPosition: 4 }, // Пятая буква "и"
        { word: "Зимовщик", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Зонт", correctPosition: 1 }, // Вторая буква "о"
        { word: "Зонта", correctPosition: 4 }, // Пятая буква "а"
        { word: "Зонтом", correctPosition: 4 }, // Пятая буква "о"
        { word: "Избалованный", correctPosition: 5 }, // Шестая буква "о"
        { word: "Издревле", correctPosition: 4 }, // Пятая буква "е"
        { word: "Иконопись", correctPosition: 0 }, // Первая буква "и"
        { word: "Иксы", correctPosition: 0 }, // Первая буква "и"
        { word: "Исключит", correctPosition: 6 }, // Седьмая буква "и"
        { word: "Исстари", correctPosition: 0 }, // Первая буква "и"
        { word: "Исчерпать", correctPosition: 3 }, // Четвертая буква "е"
        { word: "Каталог", correctPosition: 5 }, // Шестая буква "о"
        { word: "Каучук", correctPosition: 4 }, // Пятая буква "у"
        { word: "Кашлянуть", correctPosition: 1 }, // Вторая буква "а"
        { word: "Квартал", correctPosition: 5 }, // Шестая буква "а"
        { word: "Клала", correctPosition: 2 }, // Третья буква "а"
        { word: "Клешни (мн.ч.)", correctPosition: 5 }, // Шестая буква "и"
        { word: "Кормящий", correctPosition: 4 }, // Пятая буква "я"
        { word: "Крадучись", correctPosition: 2 }, // Третья буква "а"
        { word: "Крала", correctPosition: 2 }, // Третья буква "а"
        { word: "Крали", correctPosition: 2 }, // Третья буква "а"
        { word: "Кралась", correctPosition: 2 }, // Третья буква "а"
        { word: "Краны", correctPosition: 2 }, // Третья буква "а"
        { word: "Красивее", correctPosition: 4 }, // Пятая буква "и"
        { word: "Кремень", correctPosition: 4 }, // Пятая буква "е"
        { word: "Кровоточащий", correctPosition: 8 }, // Девятая буква "а"
        { word: "Кровоточить", correctPosition: 8 }, // Девятая буква "и"
        { word: "На круги своя", correctPosition: 5 }, // Шестая буква "у"
        { word: "Кутить", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Кутит", correctPosition: 1 }, // Вторая буква "у"
        { word: "Кутишь", correctPosition: 1 }, // Вторая буква "у"
        { word: "Кухонный", correctPosition: 1 }, // Вторая буква "у"
        { word: "Лакировать", correctPosition: 7 }, // Восьмая буква "а"
        { word: "Лакированный", correctPosition: 5 }, // Шестая буква "о"
        { word: "Лассо", correctPosition: 4 }, // Пятая буква "о"
        { word: "Лацкан", correctPosition: 1 }, // Вторая буква "а"
        { word: "Лениться", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Ленишься", correctPosition: 1 }, // Вторая буква "е"
        { word: "Ленится", correctPosition: 1 }, // Вторая буква "е"
        { word: "Локоть", correctPosition: 1 }, // Вторая буква "о"
        { word: "Локтя", correctPosition: 1 }, // Вторая буква "о"
        { word: "Локтем (не локтём)", correctPosition: 1 }, // Вторая буква "о"
        { word: "Ломота (в локтях)", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Ломоть", correctPosition: 3 }, // Четвертая буква "о"
    ],
    set3: [
        { word: "Мастерски", correctPosition: 8 }, // Девятая буква "и"
        { word: "Местностей (мн.ч., р.п.)", correctPosition: 1 }, // Вторая буква "е"
        { word: "Мизерный", correctPosition: 3 }, // Четвертая буква "е"
        { word: "Мозаичный", correctPosition: 4 }, // Пятая буква "и"
        { word: "Молящий", correctPosition: 3 }, // Четвертая буква "я"
        { word: "Мусоропровод", correctPosition: 10 }, // Одиннадцатая буква "о"
        { word: "Наверх", correctPosition: 3 }, // Четвертая буква "е"
        { word: "Наврала", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Наделит", correctPosition: 5 }, // Шестая буква "и"
        { word: "Надолго", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Наживший", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Нажита", correctPosition: 5 }, // Шестая буква "а"
        { word: "Нажился", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Назвалась", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Накренит", correctPosition: 6 }, // Седьмая буква "и"
        { word: "Налила", correctPosition: 5 }, // Шестая буква "а"
        { word: "Наливший", correctPosition: 3 }, // Четвертая буква "и"
        { word: "Налита", correctPosition: 5 }, // Шестая буква "а"
        { word: "Нанявшийся", correctPosition: 3 }, // Четвертая буква "я"
        { word: "Нарвала", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Нарост", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Начал", correctPosition: 1 }, // Вторая буква "а"
        { word: "Начала", correctPosition: 5 }, // Шестая буква "а"
        { word: "Начали", correctPosition: 1 }, // Вторая буква "а"
        { word: "Начавшись", correctPosition: 3 }, // Четвертая буква "а"
        { word: "Начата", correctPosition: 5 }, // Шестая буква "а"
        { word: "Начат", correctPosition: 1 }, // Вторая буква "а"
        { word: "Недуг", correctPosition: 3 }, // Четвертая буква "у"
        { word: "Некролог", correctPosition: 6 }, // Седьмая буква "о"
        { word: "Ногтя (р.п.)", correctPosition: 1 }, // Вторая буква "о"
        { word: "Обеспечение", correctPosition: 5 }, // Шестая буква "е"
        { word: "Облегчит", correctPosition: 6 }, // Седьмая буква "и"
        { word: "Облегчить", correctPosition: 6 }, // Седьмая буква "и"
        { word: "Облилась", correctPosition: 5 }, // Шестая буква "а"
        { word: "Обнялась", correctPosition: 5 }, // Шестая буква "а"
        { word: "Обогнала", correctPosition: 7 }, // Восьмая буква "а"
        { word: "Ободрить", correctPosition: 5 }, // Шестая буква "и"
        { word: "Ободришься", correctPosition: 5 }, // Шестая буква "и"
        { word: "Одновременный", correctPosition: 8 }, // Девятая буква "е"
        { word: "Опошлят", correctPosition: 2 }, // Третья буква "о"
        { word: "Оптовый", correctPosition: 3 }, // Четвертая буква "о"
        { word: "Осведомиться", correctPosition: 3 }, // Четвертая буква "е"
        { word: "Отдал", correctPosition: 0 }, // Первая буква "о"
        { word: "Отдала", correctPosition: 5 }, // Шестая буква "а"
        { word: "Отдав", correctPosition: 3 }, // Четвертая буква "а"
        { word: "Отозвала", correctPosition: 7 }, // Восьмая буква "а"
        { word: "Отрочество", correctPosition: 0 }, // Первая буква "о"
        { word: "Памятуя", correctPosition: 1 }, // Вторая буква "а"
        { word: "Партер", correctPosition: 4 }, // Пятая буква "е"
        { word: "Перчить", correctPosition: 1 }, // Вторая буква "е"
        { word: "Плодоносить", correctPosition: 8 }, // Девятая буква "и"
        { word: "Поверху", correctPosition: 1 }, // Вторая буква "о"
        { word: "Поделенный", correctPosition: 5 }, // Шестая буква "е"
        { word: "Подняв", correctPosition: 4 }, // Пятая буква "я"
        { word: "Понявший", correctPosition: 3 }, // Четвертая буква "я"
        { word: "Полог", correctPosition: 1 }, // Вторая буква "о"
        { word: "Послала", correctPosition: 4 }, // Пятая буква "а"
        { word: "Прибыв", correctPosition: 4 }, // Пятая буква "ы"
        { word: "Прибыла", correctPosition: 6 }, // Седьмая буква "а"
        { word: "Принял", correctPosition: 2 }, // Третья буква "и"
        { word: "Принудить", correctPosition: 4 }, // Пятая буква "у"
        { word: "Прирученный", correctPosition: 6 }, // Седьмая буква "е"
    ]
};

const currentSet = getSetFromDataAttribute();
const words = wordSets[currentSet] || wordSets.set1;

// Функция для проверки, является ли буква гласной
function isVowel(letter) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    return vowels.includes(letter.toLowerCase());
}

let currentWordIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Массив для хранения состояния каждого слова
let wordStates = words.map(() => ({
    selectedLetterIndex: null,
    isCorrect: false,
    completed: false
}));

const wordContainer = document.getElementById('wordContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetBtn = document.getElementById('resetBtn');
const correctCountElem = document.getElementById('correctCount');
const incorrectCountElem = document.getElementById('incorrectCount');
const messageElem = document.getElementById('message');
const currentWordIndexElem = document.getElementById('currentWordIndex');
const totalWordsElem = document.getElementById('totalWords');

// Инициализация
function init() {
    totalWordsElem.textContent = words.length;
    displayWord();
    updateStats();
    updateButtonStates();

    nextBtn.addEventListener('click', nextWord);
    prevBtn.addEventListener('click', prevWord);
    resetBtn.addEventListener('click', resetGame);
}

// Отображение текущего слова
function displayWord() {
    wordContainer.innerHTML = '';
    messageElem.textContent = '';
    messageElem.className = 'message';

    const currentWord = words[currentWordIndex];
    const currentState = wordStates[currentWordIndex];

    currentWordIndexElem.textContent = currentWordIndex + 1;

    // Создаем элементы для каждой буквы
    currentWord.word.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.dataset.index = index;

        // Проверяем, является ли буква гласной
        if (isVowel(letter)) {
            span.className = 'letter';

            // Если слово уже завершено, отключаем все буквы
            if (currentState.completed) {
                span.classList.add('disabled');

                // Если это выбранная буква, показываем правильный класс
                if (index === currentState.selectedLetterIndex) {
                    span.classList.add('correct');
                }
            } else {
                span.addEventListener('click', handleLetterClick);

                // Если это ранее выбранная неправильная буква, показываем ее как неправильную
                if (currentState.selectedLetterIndex === index && !currentState.isCorrect) {
                    span.classList.add('incorrect');
                }
            }
        } else {
            // Для согласных букв добавляем специальный класс
            span.className = 'letter consonant';
        }

        wordContainer.appendChild(span);
    });

    // Показываем сообщение, если слово завершено
    if (currentState.completed) {
        showMessage('Правильно! ✅', 'success-message');
    }

    updateButtonStates();
}

// Обработчик клика по букве
function handleLetterClick(event) {
    const clickedLetter = event.target;
    const index = parseInt(clickedLetter.dataset.index);
    const currentWord = words[currentWordIndex];
    const currentState = wordStates[currentWordIndex];

    // Если слово уже завершено, игнорируем клики
    if (currentState.completed) return;

    // Сбрасываем предыдущее выделение неправильных букв
    const incorrectLetters = wordContainer.querySelectorAll('.incorrect');
    incorrectLetters.forEach(letter => {
        letter.classList.remove('incorrect');
    });

    // Проверяем правильность выбора по позиции
    const isCorrect = index === currentWord.correctPosition;

    if (isCorrect) {
        // Правильный выбор
        clickedLetter.classList.add('correct');
        currentState.selectedLetterIndex = index;
        currentState.isCorrect = true;
        currentState.completed = true;
        correctAnswers++;

        // Отключаем все буквы после правильного выбора
        disableAllLetters();
        showMessage('Правильно! ✅', 'success-message');
    } else {
        // Неправильный выбор
        clickedLetter.classList.add('incorrect');
        currentState.selectedLetterIndex = index;
        currentState.isCorrect = false;
        incorrectAnswers++;
        showMessage('Неправильно! Попробуйте другую гласную букву', 'error-message');
    }

    updateStats();
}

// Отключение всех букв после правильного выбора
function disableAllLetters() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        if (letter.classList.contains('consonant')) return; // Не меняем состояние согласных

        letter.classList.add('disabled');
        // Убираем обработчик клика
        const newLetter = letter.cloneNode(true);
        letter.parentNode.replaceChild(newLetter, letter);
    });
}

// Показать сообщение
function showMessage(text, className) {
    messageElem.textContent = text;
    messageElem.className = `message ${className}`;
}

// Переход к следующему слову
function nextWord() {
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        displayWord();
    }
}

// Переход к предыдущему слову
function prevWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        displayWord();
    }
}

// Сброс игры
function resetGame() {
    currentWordIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    // Сбрасываем состояния всех слов
    wordStates = words.map(() => ({
        selectedLetterIndex: null,
        isCorrect: false,
        completed: false
    }));

    displayWord();
    updateStats();

    showMessage('Игра сброшена! Начните заново.', 'success-message');
}

// Обновление статистики
function updateStats() {
    correctCountElem.textContent = correctAnswers;
    incorrectCountElem.textContent = incorrectAnswers;
}

// Обновление состояний кнопок
function updateButtonStates() {
    prevBtn.disabled = currentWordIndex === 0;
    nextBtn.disabled = currentWordIndex === words.length - 1;
}

// Запуск приложения
init();
