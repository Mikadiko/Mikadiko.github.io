// vocabulary_game.js
class VocabularyDictation {
    constructor() {
        console.log('VocabularyDictation: инициализация');

        // Три набора слов с заголовками и инструкциями
        this.wordSets = {
            vocabulary_set_1: {
                title: "Словарный диктант 1",
                instruction: "Н и НН в прилагательных. Вставьте правильные буквы в пропуски",
                words: [
                    { word: 'Серебря_ый', answer: 'н' },
                    { word: 'Ветре_ый', answer: 'н' },
                    { word: 'Стари_ый', answer: 'нн' },
                    { word: 'Искусстве_ый', answer: 'нн' },
                    { word: 'Неожида_ый', answer: 'н' },
                    { word: 'Деревя_ый', answer: 'н' },
                    { word: 'Чес?ный', answer: 'т' },
                    { word: 'Прелес?ный', answer: 'т' },
                    { word: 'Извес?ный', answer: 'т' },
                    { word: 'Радос?ный', answer: 'т' },
                    { word: 'Мес?ный', answer: 'т' },
                    { word: 'Ненас?ный', answer: 'т' }
                ]
            },
            vocabulary_set_2: {
                title: "Словарный диктант 2",
                instruction: "Непроизносимые согласные. Вставьте правильные буквы в пропуски",
                words: [
                    { word: 'Оловя_ый', answer: 'н' },
                    { word: 'Стекля_ый', answer: 'н' },
                    { word: 'Безветре_ый', answer: 'н' },
                    { word: 'Пута_ый', answer: 'н' },
                    { word: 'Соломе_ый', answer: 'н' },
                    { word: 'Обдума_ый', answer: 'н' },
                    { word: 'Здра?ствуй', answer: 'в' },
                    { word: 'Ярос?ный', answer: 'т' },
                    { word: 'Сер?це', answer: 'д' },
                    { word: 'Поз?ний', answer: 'д' },
                    { word: 'Ус?ный', answer: 'т' },
                    { word: 'Капус?ный', answer: 'т' }
                ]
            },
            vocabulary_set_3: {
                title: "Словарный диктант 3",
                instruction: "Н/НН и непроизносимые согласные. Вставьте правильные буквы в пропуски",
                words: [
                    { word: 'Румя_ый', answer: 'н' },
                    { word: 'Ю_ый', answer: 'н' },
                    { word: 'Совеща_ый', answer: 'н' },
                    { word: 'Сви_ой', answer: 'нн' },
                    { word: 'Льня_ой', answer: 'н' },
                    { word: 'Невида_ый', answer: 'нн' },
                    { word: 'Интере?ный', answer: 'с' },
                    { word: 'Опас?ный', answer: 'т' },
                    { word: 'Чу?ство', answer: 'в' },
                    { word: 'Крес?ный', answer: 'т' },
                    { word: 'Хрус?нуть', answer: 'т' },
                    { word: 'Блес?нуть', answer: 'т' }
                ]
            }
        };

        // Получаем сохраненный набор из localStorage
        const savedSet = localStorage.getItem('selectedVocabularySet');
        this.currentSet = savedSet || 'vocabulary_set_1';
        this.currentSetData = this.wordSets[this.currentSet];
        this.words = this.currentSetData.words;

        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;

        // Храним ответы пользователя и состояние проверки
        this.userAnswers = new Array(this.words.length).fill('');
        this.checkedAnswers = new Array(this.words.length).fill(false);

        this.initializeGame();
    }

    initializeGame() {
        console.log('Инициализация игры словарного диктанта');

        this.setupEventListeners();
        this.displayCurrentWord();
        this.updateStats();
        this.updateSetTitle();
        this.setActiveNavLink();
        this.updateButtons();
    }

    // Устанавливаем активную ссылку в навигации
    setActiveNavLink() {
        const allVocabularyLinks = document.querySelectorAll('[data-vocabulary-set]');
        allVocabularyLinks.forEach(link => {
            link.classList.remove('active');
        });

        const currentLink = document.querySelector(`[data-vocabulary-set="${this.currentSet}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    // Отображаем текущее слово с полем ввода
    displayCurrentWord() {
        // Если все слова проверены, просто показываем последнее слово
        if (this.currentIndex >= this.words.length) {
            this.currentIndex = this.words.length - 1;
        }

        this.displayWordWithInput(this.words[this.currentIndex]);
        this.updateProgress();
        this.updateButtons();

        // НЕ очищаем сообщение здесь - только при переходе на новое слово
    }

    // Создаем HTML для слова с полем ввода (БЕЗ подсказки рядом)
    displayWordWithInput(wordData) {
        const wordContainer = document.getElementById('wordContainer');
        if (!wordContainer) {
            console.error('Не найден wordContainer!');
            return;
        }

        // Очищаем контейнер
        wordContainer.innerHTML = '';

        const wordDisplay = document.createElement('div');
        wordDisplay.className = 'word-display';

        // Разбираем слово на части
        let beforeGap = '';
        let afterGap = '';
        let gapChar = '';

        if (wordData.word.includes('_')) {
            const parts = wordData.word.split('_');
            beforeGap = parts[0];
            afterGap = parts[1] || '';
            gapChar = '_';
        } else if (wordData.word.includes('?')) {
            const parts = wordData.word.split('?');
            beforeGap = parts[0];
            afterGap = parts[1] || '';
            gapChar = '?';
        } else {
            beforeGap = wordData.word;
        }

        // Получаем сохраненный ответ пользователя
        const userAnswer = this.userAnswers[this.currentIndex];
        const isChecked = this.checkedAnswers[this.currentIndex];

        // Определяем классы для поля ввода
        let inputClass = 'gap-input';
        let inputValue = userAnswer;

        if (isChecked) {
            const isCorrect = userAnswer === wordData.answer;
            inputClass += isCorrect ? ' correct-input' : ' incorrect-input';
        }

        // Создаем HTML с инпутом
        wordDisplay.innerHTML = `
            <span class="word-part">${beforeGap}</span>
            <span class="gap-container">
                <input type="text" class="${inputClass}" maxlength="2" 
                       placeholder="${gapChar}" 
                       data-answer="${wordData.answer}"
                       value="${inputValue}"
                       ${isChecked ? 'disabled' : ''}>
            </span>
            <span class="word-part">${afterGap}</span>
        `;

        wordContainer.appendChild(wordDisplay);

        // Фокусируемся на инпуте
        setTimeout(() => {
            const gapInput = wordDisplay.querySelector('.gap-input');
            if (gapInput && !isChecked) {
                gapInput.focus();
            }
        }, 100);
    }

    // Сохраняем ответ пользователя
    saveUserAnswer() {
        const gapInput = document.querySelector('.gap-input');
        if (gapInput) {
            const userAnswer = gapInput.value.trim().toLowerCase();
            this.userAnswers[this.currentIndex] = userAnswer;
        }
    }

    // Проверяем ответ - сообщение показывается ТОЛЬКО в блоке #message
    checkAnswer() {
        this.saveUserAnswer();

        const userAnswer = this.userAnswers[this.currentIndex];
        const correctAnswer = this.words[this.currentIndex].answer;
        const messageElement = document.getElementById('message');

        if (userAnswer === correctAnswer) {
            messageElement.textContent = '✅ Верно!';
            messageElement.className = 'message correct';
            this.correctCount++;
        } else {
            messageElement.textContent = `❌ Неверно! Правильно: "${correctAnswer}"`;
            messageElement.className = 'message incorrect';
            this.incorrectCount++;
        }

        // Помечаем ответ как проверенный
        this.checkedAnswers[this.currentIndex] = true;

        // Обновляем отображение текущего слова (блокируем поле ввода)
        // НЕ вызываем displayCurrentWord(), чтобы не очищать сообщение
        this.displayWordWithInput(this.words[this.currentIndex]);
        this.updateStats();
        this.updateButtons();
    }

    // Следующее слово
    nextWord() {
        this.saveUserAnswer();

        if (this.currentIndex < this.words.length - 1) {
            this.currentIndex++;
            // При переходе на новое слово очищаем сообщение
            this.clearMessage();
            this.displayCurrentWord();
        }

        this.updateButtons();
    }

    // Предыдущее слово
    prevWord() {
        this.saveUserAnswer();

        if (this.currentIndex > 0) {
            this.currentIndex--;
            // При переходе на новое слово очищаем сообщение
            this.clearMessage();
            this.displayCurrentWord();
        }

        this.updateButtons();
    }

    // Очищаем сообщение
    clearMessage() {
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = '';
            messageElement.className = 'message';
        }
    }

    // Обновляем состояние кнопок
    updateButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const checkBtn = document.getElementById('checkBtn');

        // Кнопки навигации
        if (prevBtn) {
            prevBtn.disabled = this.currentIndex === 0;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentIndex === this.words.length - 1;
        }

        // Кнопка проверки
        if (checkBtn) {
            const isChecked = this.checkedAnswers[this.currentIndex];
            const gapInput = document.querySelector('.gap-input');
            const hasInput = gapInput ? gapInput.value.trim() !== '' : false;

            checkBtn.disabled = isChecked || !hasInput;
        }
    }

    // Начинаем заново
    resetGame() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;

        // Сбрасываем ответы
        this.userAnswers = new Array(this.words.length).fill('');
        this.checkedAnswers = new Array(this.words.length).fill(false);

        this.displayCurrentWord();
        this.clearMessage(); // Очищаем сообщение
        this.updateStats();
        this.updateButtons();
    }

    // Переключаем набор слов
    switchWordSet(setName) {
        if (this.wordSets[setName]) {
            this.currentSet = setName;
            this.currentSetData = this.wordSets[setName];
            this.words = this.currentSetData.words;

            // Сбрасываем состояние для нового набора
            this.currentIndex = 0;
            this.correctCount = 0;
            this.incorrectCount = 0;
            this.userAnswers = new Array(this.words.length).fill('');
            this.checkedAnswers = new Array(this.words.length).fill(false);

            this.displayCurrentWord();
            this.clearMessage(); // Очищаем сообщение
            this.updateSetTitle();
            this.setActiveNavLink();
            this.updateStats();
            this.updateButtons();

            // Сохраняем в localStorage
            localStorage.setItem('selectedVocabularySet', setName);
        }
    }

    // Обновляем статистику
    updateStats() {
        const correctElement = document.getElementById('correctCount');
        const incorrectElement = document.getElementById('incorrectCount');

        if (correctElement) correctElement.textContent = this.correctCount;
        if (incorrectElement) incorrectElement.textContent = this.incorrectCount;
    }

    // Обновляем прогресс
    updateProgress() {
        const currentElement = document.getElementById('currentWordIndex');
        const totalElement = document.getElementById('totalWords');

        if (currentElement) currentElement.textContent = this.currentIndex + 1;
        if (totalElement) totalElement.textContent = this.words.length;
    }

    // Обновляем заголовок
    updateSetTitle() {
        const titleElement = document.querySelector('#setInfoContainer h2');
        const paragraphElement = document.querySelector('#setInfoContainer p');

        if (titleElement) {
            titleElement.textContent = this.currentSetData.title;
        }

        if (paragraphElement) {
            paragraphElement.textContent = this.currentSetData.instruction;
        }

        document.title = this.currentSetData.title;
    }

    // Настраиваем обработчики событий
    setupEventListeners() {
        // Кнопки игры
        const checkBtn = document.getElementById('checkBtn');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const resetBtn = document.getElementById('resetBtn');

        if (checkBtn) {
            checkBtn.addEventListener('click', () => this.checkAnswer());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextWord());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevWord());
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetGame());
        }

        // Обработчик Enter для инпута
        document.addEventListener('keypress', (e) => {
            if (e.target.classList.contains('gap-input') && e.key === 'Enter') {
                this.checkAnswer();
            }
        });

        // Обработчик input для обновления кнопки
        document.addEventListener('input', (e) => {
            if (e.target.classList.contains('gap-input')) {
                this.updateButtons();
            }
        });

        // Обработчики для навигации
        this.setupVocabularyNavigationListeners();
    }

    // Настраиваем обработчики для навигации
    setupVocabularyNavigationListeners() {
        const vocabularyLinks = document.querySelectorAll('[data-vocabulary-set]');

        vocabularyLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const wordSetName = link.dataset.vocabularySet;
                if (wordSetName) {
                    this.switchWordSet(wordSetName);
                }
            });
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.vocabularyDictation = new VocabularyDictation();
    } catch (error) {
        console.error('Ошибка при создании словарного диктанта:', error);
    }
});