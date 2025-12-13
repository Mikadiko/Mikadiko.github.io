// vocabulary_game.js
class VocabularyDictation {
    constructor() {
        console.log('VocabularyDictation: инициализация');

        // Три набора слов с заголовками и инструкциями
        this.wordSets = {
            vocabulary_set_1: {
                title: "Словарный диктант 1",
                instruction: "Безударные проверяемые гласные в корне слова. Вставьте одну правильную букву в пропуски.",
                words: [
                    { word: 'б_гом', answer: 'е' },
                    { word: 'зв_зда', answer: 'е' },
                    { word: 'к_товый', answer: 'и' },
                    { word: 'л_синый', answer: 'о' },
                    { word: 'нас_лить', answer: 'о' },
                    { word: 'перел_мить', answer: 'о' },
                    { word: 'разд_валка', answer: 'е' },
                    { word: 'ув_дание', answer: 'я' },
                    { word: 'б_сой', answer: 'о' },
                    { word: 'зав_зь', answer: 'я' },
                    { word: 'кл_енка', answer: 'е' },
                    { word: 'к_пна', answer: 'о' },
                    { word: 'к_рпусный', answer: 'о' },
                    { word: 'м_лить', answer: 'о' },
                    { word: 'н_сатый', answer: 'о' },
                    { word: 'оп_лить', answer: 'а' },
                    { word: 'перегр_ваться', answer: 'е' },
                    { word: 'сп_на', answer: 'и' },
                    { word: 'вып_чка', answer: 'е' },
                    { word: 'зар_дить', answer: 'я' },
                    { word: 'кн_жна', answer: 'я' },
                    { word: 'л_ктевой', answer: 'о' },
                    { word: 'нагр_дной', answer: 'а' },
                    { word: 'обл_ниться', answer: 'е' },
                    { word: 'пол_сатый', answer: 'о' },
                    { word: 'раскр_шить', answer: 'о' },
                    { word: 'сл_стена', answer: 'а' },
                    { word: 'тр_стинка', answer: 'о' },
                    { word: 'гр_зить', answer: 'о' },
                    { word: 'ж_рдинка', answer: 'е' },
                    { word: 'заси_ть', answer: 'я' },
                    { word: 'к_ренья', answer: 'о' },
                    { word: 'обн_вление', answer: 'о' },
                    { word: 'обр_нить', answer: 'о' },
                    { word: 'проп_си', answer: 'и' },
                    { word: 'с_рить', answer: 'о' },
                ]
            },
            vocabulary_set_2: {
                title: "Словарный диктант 2",
                instruction: "Непроверяемые безударные гласные в корне слова. Вставьте одну правильную букву в пропуски.",
                words: [
                    { word: 'акв_рель', answer: 'а' },
                    { word: 'вест_бюль', answer: 'и' },
                    { word: 'дел_гат', answer: 'е' },
                    { word: 'к_питан', answer: 'а' },
                    { word: 'об_яние', answer: 'а' },
                    { word: 'р_гулировать', answer: 'е' },
                    { word: 'ст_дион', answer: 'а' },
                    { word: 'трен_ровать', answer: 'и' },
                    { word: 'фест_валь', answer: 'и' },
                    { word: 'центн_р', answer: 'е' },
                    { word: 'библ_отека', answer: 'и' },
                    { word: 'г_роизм', answer: 'е' },
                    { word: 'к_талог', answer: 'а' },
                    { word: 'м_трос', answer: 'а' },
                    { word: 'м_чта', answer: 'е' },
                    { word: 'об_няние', answer: 'о' },
                    { word: 'с_наторий', answer: 'а' },
                    { word: 'трен_р', answer: 'е' },
                    { word: 'ф_нтастика', answer: 'а' },
                    { word: 'ш_нель', answer: 'и' },
                    { word: 'ар_мат', answer: 'о' },
                    { word: 'ин_й', answer: 'е' },
                    { word: 'карн_вал', answer: 'а' },
                    { word: 'обл_ко', answer: 'а' },
                    { word: 'пл_нета', answer: 'а' },
                    { word: 'р_зультат', answer: 'е' },
                    { word: 'сч_тать', answer: 'и' },
                    { word: 'тр_буна', answer: 'и' },
                    { word: 'ф_нтан', answer: 'о' },
                    { word: 'ц_мент', answer: 'е' },
                    { word: 'в_теран', answer: 'е' },
                    { word: 'д_алог', answer: 'и' },
                    { word: 'д_спансер', answer: 'и' },
                    { word: 'д_кумент', answer: 'о' },
                    { word: 'к_бинет', answer: 'а' },
                    { word: 'к_стюм', answer: 'о' },
                    { word: 'м_гнитофон', answer: 'а' },
                    { word: '_рбита', answer: 'о' },
                    { word: 'п_ртер', answer: 'а' },
                    { word: 'пр_цент', answer: 'о' },
                ]
            },
            vocabulary_set_3: {
                title: "Словарный диктант 3",
                instruction: "Проверяемые звонкие и глухие согласные. Вставьте одну правильную букву в пропуски.",
                words: [
                    { word: 'выру_ка', answer: 'б' },
                    { word: 'зама_ка', answer: 'з' },
                    { word: 'зно_кий', answer: 'б' },
                    { word: 'зы_кий', answer: 'б' },
                    { word: 'каска_', answer: 'д' },
                    { word: 'ко_ьба', answer: 'с' },
                    { word: 'пейза_', answer: 'ж' },
                    { word: 'поса_ка', answer: 'д' },
                    { word: 'сне_', answer: 'г' },
                    { word: 'уса_ьба', answer: 'д' },
                    { word: 'заморо_ки', answer: 'з' },
                    { word: 'зу_чатый', answer: 'б' },
                    { word: 'издер_ки', answer: 'ж' },
                    { word: 'ло_ка', answer: 'д' },
                    { word: 'моло_ьба', answer: 'т' },
                    { word: 'перевя_ка', answer: 'з' },
                    { word: 'помо_ник', answer: 'щ' },
                    { word: 'ре_кий', answer: 'з' },
                    { word: 'сла_коежка', answer: 'д' },
                    { word: 'хли_кий', answer: 'п' },
                    { word: 'ве_хий', answer: 'т' },
                    { word: 'мор_', answer: 'ж' },
                    { word: 'нагре_', answer: 'в' },
                    { word: 'обтя_ка', answer: 'ж' },
                    { word: 'паде_', answer: 'ж' },
                    { word: 'ре_ьба', answer: 'з' },
                    { word: 'ро_ство', answer: 'д' },
                    { word: 'сма_ка', answer: 'з' },
                    { word: 'тетра_ка', answer: 'д' },
                    { word: 'хло_ковый', answer: 'п' },
                ]
            },
            vocabulary_set_4: {
                title: "Словарный диктант 4",
                instruction: "Непроизносимые согласные. Вставьте одну или две правильные буквы в пропуски.",
                words: [
                    { word: 'влас_ый', answer: 'тн' },
                    { word: 'глас_ость', answer: 'н' },
                    { word: 'гиган_кий', answer: 'тс' },
                    { word: 'звез_ый', answer: 'дн' },
                    { word: 'извес_ый', answer: 'тн' },
                    { word: 'корыс_ый', answer: 'тн' },
                    { word: 'кос_ый (мозг)', answer: 'тн' },
                    { word: 'ровес_ик', answer: 'н' },
                    { word: 'яс_во', answer: 'т' },
                    { word: 'гнус_ый', answer: 'н' },
                    { word: 'горес_ый', answer: 'тн' },
                    { word: 'мес_ость', answer: 'тн' },
                    { word: 'опас_ый', answer: 'н' },
                    { word: 'поверхнос_о', answer: 'тн' },
                    { word: 'пре_шественник', answer: 'д' },
                    { word: 'соглас_ый', answer: 'н' },
                    { word: 'спор_мен', answer: 'тс' },
                    { word: 'челюс_ой', answer: 'тн' },
                    { word: 'бесчес_ый', answer: 'тн' },
                    { word: 'наез_ик', answer: 'дн' },
                    { word: 'ненас_ый', answer: 'тн' },
                    { word: 'облас_ой', answer: 'тн' },
                    { word: 'пос_ый', answer: 'тн' },
                    { word: 'праз_ество', answer: 'дн' },
                    { word: 'сер_е', answer: 'дц' },
                    { word: 'счас_ивый', answer: 'тл' },
                    { word: 'ужас_ый', answer: 'н' },
                    { word: 'чу_ствовать', answer: 'в' },
                ]
            },
            vocabulary_set_5: {
                title: "Словарный диктант 5",
                instruction: "Непроверяемые согласные, включая двойные. Вставьте одну или две правильные буквы в пропуски.",
                words: [
                    { word: 'а_орд', answer: 'кк' },
                    { word: 'арти_ерия', answer: 'лл' },
                    { word: 'ба_икада', answer: 'рр' },
                    { word: 'диску_ия', answer: 'сс' },
                    { word: 'жу_ать', answer: 'жж' },
                    { word: 'коло_а', answer: 'нн' },
                    { word: 'коло_ада', answer: 'нн' },
                    { word: 'телегра_а', answer: 'мм' },
                    { word: 'тра_а', answer: 'сс' },
                    { word: 'э_замен', answer: 'к' },
                    { word: 'а_уратный', answer: 'кк' },
                    { word: 'ба_ейн', answer: 'сс' },
                    { word: 'ки_ометр', answer: 'л' },
                    { word: 'ко_одец', answer: 'л' },
                    { word: 'коми_ия', answer: 'сс' },
                    { word: 'ма_ч', answer: 'т' },
                    { word: 'оди_адцать', answer: 'нн' },
                    { word: 'те_аса', answer: 'рр' },
                    { word: 'то_ель', answer: 'нн' },
                    { word: 'фу_бол', answer: 'т' },
                    { word: 'а_етит', answer: 'пп' },
                    { word: 'га_ерея', answer: 'л' },
                    { word: 'и_юстрация', answer: 'лл' },
                    { word: 'ко_ичество', answer: 'л' },
                    { word: 'однокла_ник', answer: 'сс' },
                    { word: 'програ_а', answer: 'мм' },
                    { word: 'те_оризм', answer: 'рр' },
                    { word: 'характе_истика', answer: 'р' },
                ]
            },
            vocabulary_set_6: {
                title: "Словарный диктант 6",
                instruction: "Н или НН. Вставьте правильные буквы в пропуски.",
                words: [
                    { word: 'бара_ий', answer: 'н' },
                    { word: 'заклёва_ый', answer: 'нн' },
                    { word: 'пья_ый', answer: 'н' },
                    { word: 'сокрове_ый', answer: 'нн' },
                    { word: 'рдя_ый', answer: 'н' },
                    { word: 'реше_ый', answer: 'нн' },
                    { word: 'блаже_ый', answer: 'нн' },
                    { word: 'прида_ое невесты', answer: 'н' },
                    { word: 'багря_ый', answer: 'н' },
                    { word: 'безветре_ый', answer: 'нн' },
                    { word: 'долгожда_ый', answer: 'нн' },
                    { word: 'фаза_ий', answer: 'н' },
                    { word: 'броше_ый', answer: 'нн' },
                    { word: 'купле_ый', answer: 'нн' },
                    { word: 'назва_ый брат', answer: 'н' },
                    { word: 'посаже_ый отец', answer: 'н' },
                    { word: 'подли_ый', answer: 'нн' },
                    { word: 'неведа_ый', answer: 'нн' },
                    { word: 'тюле_ий', answer: 'н' },
                    { word: 'деревя_ый', answer: 'нн' },
                    { word: 'серебрё_ый (серебряный) (только без приставки)', answer: 'н' },
                    { word: 'лише_ый', answer: 'нн' },
                    { word: 'нечая_ый', answer: 'нн' },
                    { word: 'румя_ый', answer: 'н' },
                    { word: 'окая_ый', answer: 'нн' },
                    { word: 'контуже_ый боец', answer: 'н' },
                    { word: 'плене_ый', answer: 'нн' },
                    { word: 'сви_ой', answer: 'н' },
                    { word: 'свяще_ый', answer: 'нн' },
                    { word: 'кова_ый', answer: 'н' },
                    { word: 'медле_ый', answer: 'нн' },
                    { word: 'калё_ый', answer: 'н' },
                    { word: 'стёга_ый', answer: 'н' },
                    { word: 'зелё_ый', answer: 'н' },
                    { word: 'обиже_ый', answer: 'нн' },
                    { word: 'си_ий', answer: 'н' },
                    { word: 'замасле_ый', answer: 'нн' },
                    { word: 'оле_ий', answer: 'н' },
                    { word: 'рожде_ый', answer: 'нн' },
                    { word: 'возмуще_ый', answer: 'нн' },
                    { word: 'проще_ое воскресенье', answer: 'н' },
                    { word: 'стекля_ый', answer: 'нн' },
                    { word: 'самонадея_ый', answer: 'нн' },
                    { word: 'отчая_ый', answer: 'нн' },
                    { word: 'солё_ый (соляной)', answer: 'н' },
                    { word: 'жёва_ый', answer: 'н' },
                    { word: 'недрема_ый', answer: 'нн' },
                    { word: 'каба_ий', answer: 'н' },
                    { word: 'гаше_ый', answer: 'н' },
                    { word: 'закова_ый', answer: 'нн' },
                    { word: 'клёва_ый (в бесприставочной форме)', answer: 'н' },
                    { word: 'невида_ый', answer: 'нн' },
                    { word: 'жема_ый', answer: 'нн' },
                    { word: 'да_ый', answer: 'нн' },
                    { word: 'пережёва_ый', answer: 'нн' },
                    { word: 'пря_ый', answer: 'н' },
                    { word: 'чека_ый', answer: 'нн' },
                    { word: 'гранё_ый', answer: 'н' },
                    { word: 'жела_ый', answer: 'нн' },
                    { word: 'негада_ый', answer: 'нн' },
                    { word: 'масле_ый (масляный) (только без приставки)', answer: 'н' },
                    { word: 'ветре_ый (ветряной)', answer: 'н' },
                    { word: 'оловя_ый', answer: 'нн' },
                    { word: 'писа_ая красавица', answer: 'н' },
                    { word: 'казе_ый', answer: 'нн' },
                    { word: 'нежда_ый', answer: 'нн' },
                    { word: 'неслыха_ый', answer: 'нн' },
                    { word: 'смышле_ый ребенок', answer: 'н' },
                    { word: 'пога_ый', answer: 'н' },
                    { word: 'ю_ый', answer: 'н' },
                    { word: 'конче_ый человек (только в данном значении)', answer: 'н' },
                ]
            },
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