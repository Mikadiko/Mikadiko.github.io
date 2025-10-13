// Массив слов с правильными позициями гласных букв
const words = [
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
];

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