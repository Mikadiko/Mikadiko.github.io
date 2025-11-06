class PluralGame {
    constructor() {
        this.wordSets = this.initializeWordSets();

        // Получаем набор из параметров URL или localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const urlSet = urlParams.get('set');
        const savedSet = localStorage.getItem('selectedWordSet');

        // Приоритет: URL параметр > сохраненный набор > базовый набор
        this.currentSet = urlSet || savedSet || 'basic';

        this.words = [];
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.userAnswers = [];
        this.checkedAnswers = []; // Новый массив для отслеживания проверенных ответов
        this.isChecked = false;

        this.initializeElements();
        this.loadWordSet(this.currentSet);
        this.setupEventListeners();
        this.displayCurrentWord();
    }

    initializeWordSets() {
        return {
            basic: [
                { singular: "дыни", plural: "дынь" },
                { singular: "ботинки", plural: "ботинок" },
                { singular: "блюдце", plural: "блюдец" },
                { singular: "болотце", plural: "болотцев" },
                { singular: "гольфы", plural: "гольфов" },
                { singular: "кеды", plural: "кедов" },
                { singular: "чулки", plural: "чулок" },
                { singular: "гнездовье", plural: "гнездовий" },
                { singular: "верховье", plural: "верховьев" },
                { singular: "бредни", plural: "бредней" },
                { singular: "ампер", plural: "ампер" },
                { singular: "кухня", plural: "кухонь" },
                { singular: "якуты", plural: "якутов" },
                { singular: "солнце", plural: "солнц" },
                { singular: "драгуны", plural: "драгун" },
                { singular: "партизаны", plural: "партизан" },
                { singular: "ватт", plural: "ватт" },
                { singular: "томаты", plural: "томатов" },
                { singular: "брюки", plural: "брюк" },
                { singular: "печенье", plural: "печений" },
                { singular: "саперы", plural: "саперов" },
                { singular: "лохмотья", plural: "лохмотьев" },
                { singular: "злыдни", plural: "злыдней" },
                { singular: "няня", plural: "нянь" },
                { singular: "поверье", plural: "поверий" },
            ],

            exceptions: [
                { singular: "ребёнок", plural: "дети" },
                { singular: "человек", plural: "люди" },
                { singular: "друг", plural: "друзья" },
                { singular: "сын", plural: "сыновья" },
                { singular: "дерево", plural: "деревья" },
                { singular: "перо", plural: "перья" },
                { singular: "колос", plural: "колосья" },
                { singular: "стул", plural: "стулья" },
                { singular: "лист", plural: "листья" },
                { singular: "брат", plural: "братья" },
            ],

            complex: [
                { singular: "адрес", plural: "адреса" },
                { singular: "директор", plural: "директора" },
                { singular: "профессор", plural: "профессора" },
                { singular: "доктор", plural: "доктора" },
                { singular: "паспорт", plural: "паспорта" },
                { singular: "том", plural: "тома" },
                { singular: "корпус", plural: "корпуса" },
                { singular: "кузов", plural: "кузова" },
                { singular: "учитель", plural: "учителя" },
                { singular: "мастер", plural: "мастера" },
            ],

            all: []
        };
    }

    initializeElements() {
        this.wordContainer = document.getElementById('wordContainer');
        this.pluralInput = document.getElementById('pluralInput');
        this.checkBtn = document.getElementById('checkBtn');
        this.message = document.getElementById('message');
        this.currentWordIndex = document.getElementById('currentWordIndex');
        this.totalWords = document.getElementById('totalWords');
        this.correctCountEl = document.getElementById('correctCount');
        this.incorrectCountEl = document.getElementById('incorrectCount');
        this.resetBtn = document.getElementById('resetBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.pluralLinks = document.querySelectorAll('.nav-sublink[data-set]');
    }

    loadWordSet(setName) {
        console.log('Загружаем набор:', setName);

        if (setName === 'all') {
            // Объединяем все наборы
            this.words = [
                ...this.wordSets.basic,
                ...this.wordSets.exceptions,
                ...this.wordSets.complex
            ];
            // Перемешиваем слова
            this.shuffleArray(this.words);
            // Берем первые 30 слов чтобы не было слишком много
            this.words = this.words.slice(0, 30);
        } else {
            this.words = [...this.wordSets[setName]];
        }

        this.currentSet = setName;
        this.totalWords.textContent = this.words.length;
        this.resetGameState();
        this.displayCurrentWord();

        // Сохраняем выбранный набор
        localStorage.setItem('selectedWordSet', setName);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    setupEventListeners() {
        this.checkBtn.addEventListener('click', () => this.checkAnswer());
        this.pluralInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
        });

        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.prevBtn.addEventListener('click', () => this.previousWord());
        this.nextBtn.addEventListener('click', () => this.nextWord());

        // Обработчики для выбора наборов слов в шапке (для десктопа)
        this.pluralLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const setName = e.target.closest('.nav-sublink').dataset.set;
                console.log('Выбран набор:', setName);
                this.loadWordSet(setName);

                // Обновляем URL без перезагрузки страницы
                const newUrl = `${window.location.pathname}?set=${setName}`;
                window.history.pushState({}, '', newUrl);
            });
        });

        // Обработчик для кнопки "Мн.ч. Р.п." в мобильной версии
        const pluralLink = document.querySelector('.plural-link');
        if (pluralLink && window.innerWidth <= 768) {
            pluralLink.addEventListener('click', (e) => {
                e.preventDefault();
                // Навигация обрабатывается в navigation_bar.js
            });
        }

        // Автофокус на поле ввода при загрузке
        this.pluralInput.focus();
    }

    displayCurrentWord() {
        if (this.words.length === 0) {
            console.log('Нет слов для отображения');
            return;
        }

        const currentWord = this.words[this.currentIndex];
        console.log('Отображаем слово:', currentWord);

        this.wordContainer.innerHTML = `
            <div class="singular-word">«${currentWord.singular}»</div>
            <div class="instruction">Напишите во множественном числе родительного падежа</div>
        `;

        this.pluralInput.value = this.userAnswers[this.currentIndex] || '';

        // Блокируем поле ввода, если ответ уже проверен
        const isAnswerChecked = this.checkedAnswers[this.currentIndex];
        this.pluralInput.disabled = isAnswerChecked;

        this.message.textContent = '';
        this.message.className = 'message';

        this.currentWordIndex.textContent = this.currentIndex + 1;

        this.updateButtonStates();

        // Фокус на поле ввода, если оно активно
        if (!this.pluralInput.disabled) {
            this.pluralInput.focus();
        }
    }

    checkAnswer() {
        if (this.isChecked || this.words.length === 0) return;

        const userAnswer = this.pluralInput.value.trim().toLowerCase();
        const correctAnswer = this.words[this.currentIndex].plural.toLowerCase();

        if (!userAnswer) {
            this.message.textContent = 'Пожалуйста, введите ответ';
            this.message.className = 'message incorrect';
            return;
        }

        this.userAnswers[this.currentIndex] = userAnswer;
        this.checkedAnswers[this.currentIndex] = true; // Помечаем ответ как проверенный
        this.isChecked = true;

        if (userAnswer === correctAnswer) {
            this.correctCount++;
            this.message.textContent = 'Правильно! ✓';
            this.message.className = 'message correct';
        } else {
            this.incorrectCount++;
            this.message.textContent = `✗ Неправильно. Правильно: «${this.words[this.currentIndex].plural}»`;
            this.message.className = 'message incorrect';
        }

        this.pluralInput.disabled = true; // Блокируем поле ввода после проверки
        this.updateStats();
        this.updateButtonStates();
    }

    nextWord() {
        if (this.currentIndex < this.words.length - 1) {
            this.currentIndex++;
            this.isChecked = this.checkedAnswers[this.currentIndex] || false; // Проверяем, был ли ответ уже проверен
            this.displayCurrentWord();
        }
    }

    previousWord() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.isChecked = this.checkedAnswers[this.currentIndex] || false; // Проверяем, был ли ответ уже проверен
            this.displayCurrentWord();
        }
    }

    updateButtonStates() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.words.length - 1;

        // Блокируем кнопку проверки, если ответ уже проверен
        const isAnswerChecked = this.checkedAnswers[this.currentIndex];
        if (isAnswerChecked || this.isChecked) {
            this.checkBtn.disabled = true;
            this.checkBtn.textContent = 'Проверено';
        } else {
            this.checkBtn.disabled = false;
            this.checkBtn.textContent = 'Проверить';
        }
    }

    updateStats() {
        this.correctCountEl.textContent = this.correctCount;
        this.incorrectCountEl.textContent = this.incorrectCount;
    }

    resetGameState() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.userAnswers = [];
        this.checkedAnswers = []; // Сбрасываем массив проверенных ответов
        this.isChecked = false;
    }

    resetGame() {
        this.resetGameState();
        this.updateStats();
        this.displayCurrentWord();
        this.pluralInput.focus();
    }
}

// Инициализация игры когда DOM загружен
document.addEventListener('DOMContentLoaded', () => {
    const game = new PluralGame();
    window.game = game; // Для отладки
});