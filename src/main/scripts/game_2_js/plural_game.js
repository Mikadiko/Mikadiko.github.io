class PluralGame {
    constructor() {
        this.wordSets = this.initializeWordSets();

        const urlParams = new URLSearchParams(window.location.search);
        const urlSet = urlParams.get('set');
        const savedSet = localStorage.getItem('selectedWordSet');

        // Приоритет: URL параметр > сохраненный набор > базовый набор
        this.currentSet = urlSet || savedSet || 'words_set_1';

        this.words = [];
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.userAnswers = [];
        this.checkedAnswers = []; // Новый массив для отслеживания проверенных ответов
        this.isChecked = false;

        console.log('=== PluralGame инициализация ===');
        console.log('URL параметры:', new URLSearchParams(window.location.search).toString());
        console.log('Сохраненный набор:', savedSet);
        console.log('Текущий набор:', this.currentSet);

        this.initializeElements();
        this.loadWordSet(this.currentSet);
        this.setupEventListeners();
        this.displayCurrentWord();
    }

    initializeWordSets() {
        return {
            words_set_1: {
                title: "Падежный диктант 1",
                instruction: "Напишите слово в родительном падеже множественного числа",

                words: [
                    {singular: "дыни", plural: "дынь"},
                    {singular: "ботинки", plural: "ботинок"},
                    {singular: "блюдце", plural: "блюдец"},
                    {singular: "болотце", plural: "болотцев"},
                    {singular: "гольфы", plural: "гольфов"},
                    {singular: "кеды", plural: "кедов"},
                    {singular: "чулки", plural: "чулок"},
                    {singular: "гнездовье", plural: "гнездовий"},
                    {singular: "верховье", plural: "верховьев"},
                    {singular: "бредни", plural: "бредней"},
                    {singular: "ампер", plural: "ампер"},
                    {singular: "кухня", plural: "кухонь"},
                    {singular: "якуты", plural: "якутов"},
                    {singular: "солнце", plural: "солнц"},
                    {singular: "драгуны", plural: "драгун"},
                    {singular: "партизаны", plural: "партизан"},
                    {singular: "ватт", plural: "ватт"},
                    {singular: "томаты", plural: "томатов"},
                    {singular: "брюки", plural: "брюк"},
                    {singular: "печенье", plural: "печений"},
                    {singular: "саперы", plural: "саперов"},
                    {singular: "лохмотья", plural: "лохмотьев"},
                    {singular: "злыдни", plural: "злыдней"},
                    {singular: "няня", plural: "нянь"},
                    {singular: "поверье", plural: "поверий"},
                ]
            },

            words_set_2: {
                title: "Падежный диктант 2",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "буряты", plural: "бурят"},
                    {singular: "увечье", plural: "увечий"},
                    {singular: "платье", plural: "платьев"},
                    {singular: "ясли", plural: "яслей"},
                    {singular: "грабли", plural: "граблей"},
                    {singular: "копье", plural: "копий"},
                    {singular: "сердце", plural: "сердец"},
                    {singular: "гусары", plural: "гусар"},
                    {singular: "солдаты", plural: "солдат"},
                    {singular: "монголы", plural: "монголов"},
                    {singular: "яблоки", plural: "яблок"},
                    {singular: "погоны", plural: "погон"},
                    {singular: "бананы", plural: "бананов"},
                    {singular: "копытце", plural: "копытец"},
                    {singular: "хорваты", plural: "хорватов"},
                    {singular: "оконце", plural: "оконцев"},
                    {singular: "гренадеры", plural: "гренадер"},
                    {singular: "ананасы", plural: "ананасов"},
                    {singular: "валенки", plural: "валенок"},
                    {singular: "шорты", plural: "шорт"},
                    {singular: "румыны", plural: "румын"},
                    {singular: "татары", plural: "татар"},
                    {singular: "рельсы", plural: "рельсов"},
                    {singular: "баклажаны", plural: "баклажанов"},
                    {singular: "гетры", plural: "гетр"},
                ]
            },

            words_set_3: {
                title: "Падежный диктант 3",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "гранаты", plural: "гранатов"},
                    {singular: "бахилы", plural: "бахил"},
                    {singular: "сапоги", plural: "сапог"},
                    {singular: "дровни", plural: "дровней"},
                    {singular: "башня", plural: "башен"},
                    {singular: "макароны", plural: "макарон"},
                    {singular: "клипсы", plural: "клипсов"},
                    {singular: "эполеты", plural: "эполет"},
                    {singular: "башкиры", plural: "башкир"},
                    {singular: "деревце", plural: "деревцев"},
                    {singular: "одеяльце", plural: "одеялец"},
                    {singular: "таджики", plural: "таджиков"},
                    {singular: "кадеты", plural: "кадет"},
                    {singular: "мандарины", plural: "мандаринов"},
                    {singular: "помидоры", plural: "помидоров"},
                    {singular: "панталоны", plural: "панталон"},
                    {singular: "кушанье", plural: "кушаний"},
                    {singular: "подземелье", plural: "подземелий"},
                    {singular: "низовье", plural: "низовьев"},
                    {singular: "хлопья", plural: "хлопьев"},
                    {singular: "гантели", plural: "гантелей"},
                    {singular: "тети", plural: "тетей"},
                    {singular: "вафля", plural: "вафель"},
                    {singular: "жабры", plural: "жабр"},
                    {singular: "петля", plural: "петель"},
                ]
            },
            words_set_4: {
                title: "Падежный диктант 4",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "лимоны", plural: "лимонов"},
                    {singular: "чукчи", plural: "чукчей"},
                    {singular: "аршин", plural: "аршин"},
                    {singular: "басня", plural: "басен"},
                    {singular: "вольт", plural: "вольт"},
                    {singular: "абрикосы", plural: "абрикосов"},
                    {singular: "сливы", plural: "слив"},
                    {singular: "кастаньеты", plural: "кастаньет"},
                    {singular: "лампасы", plural: "лампасов"},
                    {singular: "армян", plural: "армян"},
                    {singular: "турки", plural: "турок"},
                    {singular: "туфли", plural: "туфель"},
                    {singular: "запястье", plural: "запястий"},
                    {singular: "коренья", plural: "кореньев"},
                    {singular: "ладья", plural: "ладей"},
                    {singular: "устье", plural: "устьев"},
                    {singular: "шаровары", plural: "шаровар"},
                    {singular: "будни", plural: "будней"},
                    {singular: "простыни", plural: "простыней"},
                    {singular: "дело", plural: "много дел"},
                    {singular: "носки", plural: "носков"},
                    {singular: "отродье", plural: "отродий"},
                    {singular: "апельсины", plural: "апельсинов"},
                    {singular: "бутсы", plural: "бутс"},
                    {singular: "сиденье", plural: "сидений"},
                ]
            },
            words_set_5: {
                title: "Падежный диктант 5",
                instruction: "Напишите слово в дательном падеже множественного числа",
                words: [
                    {singular: "породе", plural: "породам"},
                    {singular: "капле", plural: "каплям"},
                    {singular: "армии", plural: "армиям"},
                    {singular: "разине", plural: "разиням"},
                    {singular: "сынишке", plural: "сынишкам"},
                    {singular: "дивану", plural: "диванам"},
                    {singular: "февралю", plural: "февралям"},
                    {singular: "колену", plural: "коленам"},
                    {singular: "рыси", plural: "рысям"},
                    {singular: "трости", plural: "тростям"},
                    {singular: "двери", plural: "дверям"},
                    {singular: "пути", plural: "путям"},
                    {singular: "стремени", plural: "стременам"},
                ]
            },

            words_set_6: {
                title: "Падежный диктант 6",
                instruction: "Напишите слово в творительном падеже множественного числа",
                words: [
                    {singular: "сёстры", plural: "сёстрами"},
                    {singular: "сказки", plural: "сказками"},
                    {singular: "братья", plural: "братьями"},
                    {singular: "моря", plural: "морями"},
                    {singular: "кисти", plural: "кистями"},
                    {singular: "временем", plural: "временами"},
                    {singular: "полотенцем", plural: "полотенцами"},
                    {singular: "океаном", plural: "океанами"},
                    {singular: "тюленем", plural: "тюленями"},
                    {singular: "грамотой", plural: "грамотами"},
                ]
            },
            words_set_7: {
                title: "Падежный диктант 7",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "абрикос", plural: "абрикосов"},
                    {singular: "ананас", plural: "ананасов"},
                    {singular: "вишня", plural: "вишен"},
                    {singular: "макароны", plural: "макарон"},
                    {singular: "апельсин", plural: "апельсинов"},
                    {singular: "дыня", plural: "дынь"},
                    {singular: "баклажан", plural: "баклажанов"},
                    {singular: "слива", plural: "слив"},
                    {singular: "яблоко", plural: "яблок"},
                    {singular: "банан", plural: "бананов"},
                    {singular: "гранат", plural: "гранатов"},
                    {singular: "лимон", plural: "лимонов"},
                    {singular: "вишня", plural: "вишен"},
                    {singular: "помидор", plural: "помидоров"},
                    {singular: "томат", plural: "томатов"},
                ]
            },
            words_set_8: {
                title: "Падежный диктант 8",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "армяне", plural: "армян"},
                    {singular: "грузины", plural: "грузин"},
                    {singular: "башкиры", plural: "башкир"},
                    {singular: "болгары", plural: "болгар"},
                    {singular: "осетины", plural: "осетин"},
                    {singular: "румыны", plural: "румын"},
                    {singular: "татары", plural: "татар"},
                    {singular: "туркмены", plural: "туркмен"},
                    {singular: "цыгане", plural: "цыган"},
                    {singular: "буряты", plural: "бурят"},
                    {singular: "турки", plural: "турок"},
                    {singular: "монголы", plural: "монголов"},
                    {singular: "калмыки", plural: "калмыков"},
                    {singular: "киргизы", plural: "киргизов"},
                    {singular: "таджики", plural: "таджиков"},
                    {singular: "узбеки", plural: "узбеков"},
                ]
            },
            words_set_9: {
                title: "Падежный диктант 9",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "гнездовье", plural: "гнездовий"},
                    {singular: "будни", plural: "будней"},
                    {singular: "запястье", plural: "запястий"},
                    {singular: "простыня", plural: "простыней"},
                    {singular: "кушанье", plural: "кушаний"},
                    {singular: "гантель", plural: "гантелей"},
                    {singular: "надгробье", plural: "надгробий"},
                    {singular: "грабли", plural: "граблей"},
                    {singular: "ожерелье", plural: "ожерелий"},
                    {singular: "дядя", plural: "дядей"},
                    {singular: "печенье", plural: "печений"},
                    {singular: "тетя", plural: "тетей"},
                    {singular: "сиденье", plural: "сидений"},
                    {singular: "ясли", plural: "яслей"},
                    {singular: "побережье", plural: "побережий"},
                    {singular: "кегль", plural: "кеглей"},
                    {singular: "соленье", plural: "солений"},
                    {singular: "свеча", plural: "свечей"},
                    {singular: "поверье", plural: "поверий"},
                    {singular: "увечье", plural: "увечий"},
                    {singular: "няня", plural: "нянь"},
                    {singular: "подземелье", plural: "подземелий"},
                    {singular: "оладья", plural: "оладий"},
                    {singular: "платье", plural: "платьев"},
                    {singular: "ущелье", plural: "ущелий"},
                    {singular: "устье", plural: "устьев"},
                    {singular: "угодье", plural: "угодий"},
                    {singular: "низовье", plural: "низовьев"},
                ]
            },
            words_set_10: {
                title: "Падежный диктант 10",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "блюдце", plural: "блюдец"},
                    {singular: "болотце", plural: "болотцев"},
                    {singular: "копытце", plural: "копытец"},
                    {singular: "оконце", plural: "оконцев"},
                    {singular: "полотенце", plural: "полотенец"},
                    {singular: "солнце", plural: "солнц"},
                    {singular: "зеркальце", plural: "зеркалец"},
                    {singular: "одеяльце", plural: "одеялец"},
                    {singular: "щупальце", plural: "щупалец"},
                    {singular: "кочерга", plural: "кочерёг"},
                    {singular: "заморозки", plural: "заморозков"},
                    {singular: "серьга", plural: "серег"},
                    {singular: "очистки", plural: "очистков"},
                ]
            },
            words_set_11: {
                title: "Падежный диктант 11",
                instruction: "Напишите слово в родительном падеже множественного числа",
                words: [
                    {singular: "буряты", plural: "бурят"},
                    {singular: "увечье", plural: "увечий"},
                    {singular: "платье", plural: "платьев"},
                    {singular: "ясли", plural: "яслей"},
                    {singular: "грабли", plural: "граблей"},
                    {singular: "копье", plural: "копий"},
                    {singular: "сердце", plural: "сердец"},
                    {singular: "гусары", plural: "гусар"},
                    {singular: "солдаты", plural: "солдат"},
                    {singular: "монголы", plural: "монголов"},
                    {singular: "яблоки", plural: "яблок"},
                    {singular: "погоны", plural: "погон"},
                    {singular: "бананы", plural: "бананов"},
                    {singular: "копытце", plural: "копытец"},
                    {singular: "хорваты", plural: "хорватов"},
                    {singular: "оконце", plural: "оконцев"},
                    {singular: "гренадеры", plural: "гренадер"},
                    {singular: "ананасы", plural: "ананасов"},
                    {singular: "валенки", plural: "валенок"},
                    {singular: "шорты", plural: "шорт"},
                    {singular: "румыны", plural: "румын"},
                    {singular: "татары", plural: "татар"},
                    {singular: "рельсы", plural: "рельсов"},
                    {singular: "баклажаны", plural: "баклажанов"},
                    {singular: "гетры", plural: "гетр"},
                ]
            },
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
        console.log('=== Загружаем набор слов ===');
        console.log('Набор:', setName);

        const wordSet = this.wordSets[setName];

        // УБИРАЕМ логику для 'all'
        this.currentSet = setName;
        this.currentWordSet = wordSet;
        this.words = [...wordSet.words];
        this.totalWords.textContent = this.words.length;

        this.resetGameState();
        this.displayCurrentWord();
        this.updateSetInfo();

        localStorage.setItem('selectedWordSet', setName);

        console.log('Загружено слов:', this.words.length);
    }

    updateSetInfo() {
        const infoContainer = document.getElementById('setInfoContainer');
        if (infoContainer && this.currentWordSet) {
            infoContainer.innerHTML = `
            <div class="set-title">${this.currentWordSet.title}</div>
            <div class="set-instruction">📝 ${this.currentWordSet.instruction}</div>
        `;
        }
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
        this.setupWordSetNavigation();

        // Автофокус на поле ввода при загрузке
        this.pluralInput.focus();
    }

    // НОВЫЙ МЕТОД: Настройка навигации по наборам слов
    setupWordSetNavigation() {
        // Функция для обработки клика по набору слов
        const handleWordSetClick = (e) => {
            e.preventDefault();
            e.stopPropagation(); // Важно: останавливаем всплытие

            const link = e.target.closest('.nav-sublink');
            if (!link) return;

            const setName = link.dataset.set;
            console.log('Выбран набор слов:', setName);

            if (setName) {
                this.loadWordSet(setName);

                // Обновляем URL без перезагрузки страницы
                const newUrl = `${window.location.pathname}?set=${setName}`;
                window.history.pushState({}, '', newUrl);
            }
        };

        // Прямое назначение обработчиков после небольшой задержки
        setTimeout(() => {
            const links = document.querySelectorAll('.nav-sublink[data-set]');
            console.log('Найдено ссылок на наборы слов на странице игры:', links.length);

            links.forEach(link => {
                link.removeEventListener('click', handleWordSetClick); // Удаляем старые обработчики
                link.addEventListener('click', handleWordSetClick);
            });
        }, 100);
    }

    displayCurrentWord() {
        if (this.words.length === 0) {
            console.log('Нет слов для отображения');
            this.wordContainer.innerHTML = '<div class="singular-word">Нет слов для отображения</div>';
            return;
        }

        const currentWord = this.words[this.currentIndex];
        console.log('Отображаем слово:', currentWord);

        this.wordContainer.innerHTML = `
            <div class="singular-word">«${currentWord.singular}»</div>
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