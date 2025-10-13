// Массив слов с правильными позициями гласных букв
        const words = [
            { word: "Агент", correctPosition: 2 }, // Третья буква "е"
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