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
        {word: "агент", correctPosition: 2}, // Третья буква "е"
        {word: "анатом", correctPosition: 2}, // Третья буква "а"
        {word: "апостроф", correctPosition: 6}, // Седьмая буква "о"
        {word: "аэропорты", correctPosition: 5}, // Шестая буква "о"
        {word: "балованный", correctPosition: 3}, // Четвертая буква "о"
        {word: "баловать", correctPosition: 5}, // Шестая буква "а"
        {word: "балуясь", correctPosition: 3}, // Четвертая буква "у"
        {word: "банты", correctPosition: 1}, // Вторая буква "а"
        {
            word: "бантом", correctPosition: 1, context: {
                left: null,
                right: " (т.п.)"
            }
        }, // Вторая буква "а"
        {word: "бармен", correctPosition: 1}, // Вторая буква "а"
        {word: "благовест", correctPosition: 2}, // Третья буква "а"
        {word: "бомбардировать", correctPosition: 11}, // Двенадцатая буква "а"
        {
            word: "бороду", correctPosition: 1, context: {
                left: null,
                right: " (в.п.)"
            }
        }, // Вторая буква "о"
        {word: "брала", correctPosition: 4}, // Пятая буква "а"
        {word: "бунгало", correctPosition: 1}, // Вторая буква "у"
        {
            word: "бухгалтеров", correctPosition: 4, context: {
                left: null,
                right: " (р.п.)"
            }
        }, // Пятая буква "а"
        {word: "верба", correctPosition: 1}, // Вторая буква "е"
        {word: "верна", correctPosition: 4}, // Пятая буква "а"
        {word: "вероисповедание", correctPosition: 9}, // Десятая буква "е"
        {word: "вечеря", correctPosition: 1}, // Вторая буква "е"
        {word: "взяла", correctPosition: 4}, // Пятая буква "а"
        {word: "включен", correctPosition: 5}, // Шестая буква "е"
        {word: "включенный", correctPosition: 5}, // Шестая буква "е"
        {word: "включим", correctPosition: 5}, // Шестая буква "и"
        {word: "включит", correctPosition: 5}, // Шестая буква "и"
        {word: "включишь", correctPosition: 5}, // Шестая буква "и"
        {word: "влилась", correctPosition: 4}, // Пятая буква "а"
        {word: "вовремя", correctPosition: 1}, // Вторая буква "о"
        {
            word: "возрастов", correctPosition: 7, context: {
                left: null,
                right: " (р.п.)"
            }
        }, // Восьмая буква "о"
        {word: "ворвалась", correctPosition: 6}, // Седьмая буква "а"
        {word: "восприняла", correctPosition: 9}, // Десятая буква "а"
        {word: "воссоздала", correctPosition: 9}, // Десятая буква "а"
        {word: "вручит", correctPosition: 4}, // Пятая буква "и"
        {word: "вручат", correctPosition: 4}, // Пятая буква "а"
        {word: "вручим", correctPosition: 4}, // Пятая буква "и"
        {word: "врученный", correctPosition: 4}, // Пятая буква "е"
        {word: "вручена", correctPosition: 6}, // Седьмая буква "а"
        {word: "всенощная", correctPosition: 2}, // Третья буква "е"
        {word: "генезис", correctPosition: 1}, // Вторая буква "е"
        {word: "герб", correctPosition: 1}, // Вторая буква "е"
        {word: "герба", correctPosition: 4}, // Пятая буква "а"
        {word: "гербом", correctPosition: 4}, // Пятая буква "о"
        {word: "гербовый", correctPosition: 1}, // Вторая буква "е"
        {word: "дабы", correctPosition: 3}, // Четвертая буква "ы"
        {word: "давнишний", correctPosition: 4}, // Пятая буква "и"
        {word: "деньги", correctPosition: 1}, // Вторая буква "е"
        {word: "деньгам", correctPosition: 5}, // Шестая буква "а"
        {word: "деньгами", correctPosition: 5}, // Шестая буква "а"
        {
            word: "деньгах", correctPosition: 5, context: {
                left: "о  ",
                right: null,
            }
        }, // Шестая буква "а"
        {word: "дефис", correctPosition: 3}, // Четвертая буква "и"
        {word: "де-юре", correctPosition: 3}, // Четвертая буква "ю"
        {word: "диоптрия", correctPosition: 6}, // Седьмая буква "и"
        {word: "диспансер", correctPosition: 7}, // Восьмая буква "е"
        {word: "добела", correctPosition: 5}, // Шестая буква "а"
        {word: "добрала", correctPosition: 6}, // Седьмая буква "а"
        {word: "добралась", correctPosition: 6}, // Седьмая буква "а"
        {word: "доверху", correctPosition: 1}, // Вторая буква "о"
        {word: "догмат", correctPosition: 1}, // Вторая буква "о"
        {word: "договор", correctPosition: 5}, // Шестая буква "о"
        {word: "договоры", correctPosition: 5}, // Шестая буква "о"
    ],
    set2: [
        {word: "договорный", correctPosition: 5}, // Шестая буква "о"
        {word: "договоренность", correctPosition: 7}, // Восьмая буква "е"
        {word: "дождалась", correctPosition: 6}, // Седьмая буква "а"
        {word: "дозвонится", correctPosition: 6}, // Седьмая буква "и"
        {word: "дозировать", correctPosition: 3}, // Четвертая буква "и"
        {word: "докрасна", correctPosition: 7}, // Восьмая буква "а"
        {word: "документ", correctPosition: 5}, // Шестая буква "е"
        {word: "донельзя", correctPosition: 3}, // Четвертая буква "е"
        {word: "донизу", correctPosition: 1}, // Вторая буква "о"
        {word: "досуха", correctPosition: 1}, // Вторая буква "о"
        {word: "древко", correctPosition: 2}, // Третья буква "е"
        {word: "дремота", correctPosition: 4}, // Пятая буква "о"
        {word: "жалюзи", correctPosition: 5}, // Шестая буква "и"
        {word: "ждала", correctPosition: 4}, // Пятая буква "а"
        {
            word: "жерло", correctPosition: 4, context: {
                left: null,
                right: " (вулкана)"
            }
        }, // Пятая буква "о"
        {word: "жернов", correctPosition: 1}, // Вторая буква "е"
        {word: "жилось", correctPosition: 3}, // Четвертая буква "о"
        {word: "завидно", correctPosition: 3}, // Четвертая буква "и"
        {word: "загодя", correctPosition: 1}, // Вторая буква "а"
        {word: "закупорить", correctPosition: 3}, // Четвертая буква "у"
        {word: "залил", correctPosition: 3}, // Четвертая буква "и"
        {word: "залит", correctPosition: 3}, // Четвертая буква "и"
        {word: "заливший", correctPosition: 3}, // Четвертая буква "и"
        {word: "занял", correctPosition: 1}, // Вторая буква "а"
        {word: "заняла", correctPosition: 5}, // Шестая буква "а"
        {word: "занятый", correctPosition: 1}, // Вторая буква "а"
        {word: "занялся", correctPosition: 6}, // Седьмая буква "я"
        {word: "заперта", correctPosition: 6}, // Седьмая буква "а"
        {word: "заплесневеть", correctPosition: 4}, // Пятая буква "е"
        {word: "запломбировать", correctPosition: 11}, // Двенадцатая буква "а"
        {word: "засветло", correctPosition: 1}, // Вторая буква "а"
        {word: "затемно", correctPosition: 1}, // Вторая буква "а"
        {word: "звала", correctPosition: 4}, // Пятая буква "а"
        {word: "звонит", correctPosition: 4}, // Пятая буква "и"
        {word: "зимовщик", correctPosition: 3}, // Четвертая буква "о"
        {word: "зонт", correctPosition: 1}, // Вторая буква "о"
        {word: "зонта", correctPosition: 4}, // Пятая буква "а"
        {word: "зонтом", correctPosition: 4}, // Пятая буква "о"
        {word: "избалованный", correctPosition: 5}, // Шестая буква "о"
        {word: "издревле", correctPosition: 4}, // Пятая буква "е"
        {word: "иконопись", correctPosition: 0}, // Первая буква "и"
        {word: "иксы", correctPosition: 0}, // Первая буква "и"
        {word: "исключит", correctPosition: 6}, // Седьмая буква "и"
        {word: "исстари", correctPosition: 0}, // Первая буква "и"
        {word: "исчерпать", correctPosition: 3}, // Четвертая буква "е"
        {word: "каталог", correctPosition: 5}, // Шестая буква "о"
        {word: "каучук", correctPosition: 4}, // Пятая буква "у"
        {word: "кашлянуть", correctPosition: 1}, // Вторая буква "а"
        {word: "квартал", correctPosition: 5}, // Шестая буква "а"
        {word: "клала", correctPosition: 2}, // Третья буква "а"
        {
            word: "клешни", correctPosition: 5, context: {
                left: null,
                right: " (мн.ч.)"
            }
        }, // Шестая буква "и"
        {word: "кормящий", correctPosition: 4}, // Пятая буква "я"
        {word: "крадучись", correctPosition: 2}, // Третья буква "а"
        {word: "крала", correctPosition: 2}, // Третья буква "а"
        {word: "крали", correctPosition: 2}, // Третья буква "а"
        {word: "кралась", correctPosition: 2}, // Третья буква "а"
        {word: "краны", correctPosition: 2}, // Третья буква "а"
        {word: "красивее", correctPosition: 4}, // Пятая буква "и"
        {word: "кремень", correctPosition: 4}, // Пятая буква "е"
        {word: "кровоточащий", correctPosition: 8}, // Девятая буква "а"
        {word: "кровоточить", correctPosition: 8}, // Девятая буква "и"
        {
            word: "круги", correctPosition: 2, context: {
                left: "на ",
                right: " своя"
            }
        }, // Третья буква "у"
        {word: "кутить", correctPosition: 3}, // Четвертая буква "и"
        {word: "кутит", correctPosition: 1}, // Вторая буква "у"
        {word: "кутишь", correctPosition: 1}, // Вторая буква "у"
        {word: "кухонный", correctPosition: 1}, // Вторая буква "у"
        {word: "лакировать", correctPosition: 7}, // Восьмая буква "а"
        {word: "лакированный", correctPosition: 5}, // Шестая буква "о"
        {word: "лассо", correctPosition: 4}, // Пятая буква "о"
        {word: "лацкан", correctPosition: 1}, // Вторая буква "а"
        {word: "лениться", correctPosition: 3}, // Четвертая буква "и"
        {word: "ленишься", correctPosition: 1}, // Вторая буква "е"
        {word: "ленится", correctPosition: 1}, // Вторая буква "е"
        {word: "локоть", correctPosition: 1}, // Вторая буква "о"
        {word: "локтя", correctPosition: 1}, // Вторая буква "о"
        {
            word: "локтем", correctPosition: 1, context: {
                left: null,
                right: " (не локтём)"
            }
        }, // Вторая буква "о"
        {
            word: "ломота", correctPosition: 3, context: {
                left: null,
                right: " (в костях)"
            }
        }, // Четвертая буква "о"
        {word: "ломоть", correctPosition: 3}, // Четвертая буква "о"
    ],
    set3: [
        {word: "мастерски", correctPosition: 8}, // Девятая буква "и"
        {
            word: "местностей", correctPosition: 1, context: {
                left: null,
                right: " (мн.ч., р.п.)"
            }
        }, // Вторая буква "е"
        {word: "мизерный", correctPosition: 3}, // Четвертая буква "е"
        {word: "мозаичный", correctPosition: 4}, // Пятая буква "и"
        {word: "молящий", correctPosition: 3}, // Четвертая буква "я"
        {word: "мусоропровод", correctPosition: 10}, // Одиннадцатая буква "о"
        {word: "наверх", correctPosition: 3}, // Четвертая буква "е"
        {word: "наврала", correctPosition: 6}, // Седьмая буква "а"
        {word: "наделит", correctPosition: 5}, // Шестая буква "и"
        {word: "надолго", correctPosition: 3}, // Четвертая буква "о"
        {word: "наживший", correctPosition: 3}, // Четвертая буква "и"
        {word: "нажита", correctPosition: 5}, // Шестая буква "а"
        {word: "нажился", correctPosition: 3}, // Четвертая буква "и"
        {word: "назвалась", correctPosition: 6}, // Седьмая буква "а"
        {word: "накренит", correctPosition: 6}, // Седьмая буква "и"
        {word: "налила", correctPosition: 5}, // Шестая буква "а"
        {word: "наливший", correctPosition: 3}, // Четвертая буква "и"
        {word: "налита", correctPosition: 5}, // Шестая буква "а"
        {word: "нанявшийся", correctPosition: 3}, // Четвертая буква "я"
        {word: "нарвала", correctPosition: 6}, // Седьмая буква "а"
        {word: "нарост", correctPosition: 3}, // Четвертая буква "о"
        {word: "начал", correctPosition: 1}, // Вторая буква "а"
        {word: "начала", correctPosition: 5}, // Шестая буква "а"
        {word: "начали", correctPosition: 1}, // Вторая буква "а"
        {word: "начавшись", correctPosition: 3}, // Четвертая буква "а"
        {word: "начата", correctPosition: 5}, // Шестая буква "а"
        {word: "начат", correctPosition: 1}, // Вторая буква "а"
        {word: "недуг", correctPosition: 3}, // Четвертая буква "у"
        {word: "некролог", correctPosition: 6}, // Седьмая буква "о"
        {
            word: "ногтя", correctPosition: 1, context: {
                left: null,
                right: " (р.п.)"
            }
        }, // Вторая буква "о"
        {word: "обеспечение", correctPosition: 5}, // Шестая буква "е"
        {word: "облегчит", correctPosition: 6}, // Седьмая буква "и"
        {word: "облегчить", correctPosition: 6}, // Седьмая буква "и"
        {word: "облилась", correctPosition: 5}, // Шестая буква "а"
        {word: "обнялась", correctPosition: 5}, // Шестая буква "а"
        {word: "обогнала", correctPosition: 7}, // Восьмая буква "а"
        {word: "ободрить", correctPosition: 5}, // Шестая буква "и"
        {word: "ободришься", correctPosition: 5}, // Шестая буква "и"
        {word: "одновременный", correctPosition: 8}, // Девятая буква "е"
        {word: "опошлят", correctPosition: 2}, // Третья буква "о"
        {word: "оптовый", correctPosition: 3}, // Четвертая буква "о"
        {word: "осведомиться", correctPosition: 3}, // Четвертая буква "е"
        {word: "отдал", correctPosition: 0}, // Первая буква "о"
        {word: "отдала", correctPosition: 5}, // Шестая буква "а"
        {word: "отдав", correctPosition: 3}, // Четвертая буква "а"
        {word: "отозвала", correctPosition: 7}, // Восьмая буква "а"
        {word: "отрочество", correctPosition: 0}, // Первая буква "о"
        {word: "памятую", correctPosition: 1}, // Вторая буква "а"
        {word: "партер", correctPosition: 4}, // Пятая буква "е"
        {word: "перчить", correctPosition: 1}, // Вторая буква "е"
        {word: "плодоносить", correctPosition: 8}, // Девятая буква "и"
        {word: "поверху", correctPosition: 1}, // Вторая буква "о"
        {word: "поделенный", correctPosition: 5},  // Шестая буква "е"
        {word: "подняв", correctPosition: 4}, // Пятая буква "я"
        {word: "понявший", correctPosition: 3}, // Четвертая буква "я"
        {word: "полог", correctPosition: 1}, // Вторая буква "о"
        {word: "послала", correctPosition: 4}, // Пятая буква "а"
        {word: "прибыв", correctPosition: 4}, // Пятая буква "ы"
        {word: "прибыла", correctPosition: 6}, // Седьмая буква "а"
        {word: "принял", correctPosition: 2}, // Третья буква "и"
        {word: "принудить", correctPosition: 4}, // Пятая буква "у"
        {word: "прирученный", correctPosition: 6}, // Седьмая буква "е"
    ],
    set4: [
        {word: "проживший", correctPosition: 4}, // Пятая буква "и"
        {word: "прозорлива", correctPosition: 7}, // Восьмая буква "и"
        {word: "пурпур", correctPosition: 1}, // Вторая буква "у"
        {word: "свекла", correctPosition: 2}, // Третья буква "е"
        {word: "сверлит", correctPosition: 5}, // Шестая буква "и"
        {word: "сироты", correctPosition: 3}, // Четвертая буква "о"
        {word: "сливовый", correctPosition: 2}, // Третья буква "и"
        {word: "сняла", correctPosition: 4}, // Пятая буква "а"
        {word: "согнутый", correctPosition: 1}, // Вторая буква "о"
        {word: "создана", correctPosition: 6}, // Седьмая буква "а"
        {word: "сорит", correctPosition: 3}, // Четвертая буква "и"
        {
            word: "средам", correctPosition: 4, context: {
                left: " по",
                right: null,
            }
        }, // Пятая буква "а"
        {
            word: "средства", correctPosition: 2, context: {
                left: null,
                right: " (им.п., мн.ч.)"
            }
        }, // Третья буква "и"
        {word: "столяр", correctPosition: 4}, // Пятая буква "я"
        {word: "танцовщик", correctPosition: 4}, // Пятая буква "о"
        {word: "тефтели", correctPosition: 1}, // Вторая буква "е"
        {word: "торты", correctPosition: 1}, // Вторая буква "о"
        {word: "тортов", correctPosition: 1}, // Вторая буква "о"
        {word: "тотчас", correctPosition: 1}, // Вторая буква "о"
        {word: "туфля", correctPosition: 1}, // Вторая буква "у"
        {word: "туфлям", correctPosition: 1}, // Вторая буква "у"
        {word: "убыстрить", correctPosition: 6}, // Седьмая буква "и"
        {word: "углубить", correctPosition: 5}, // Шестая буква "и"
        {word: "украинский", correctPosition: 4}, // Пятая буква "а"
        {word: "укрепит", correctPosition: 5}, // Шестая буква "и"
        {word: "умно", correctPosition: 3}, // Четвертая буква "о"
        {word: "фетиш", correctPosition: 3}, // Четвертая буква "и"
        {word: "факсимиле", correctPosition: 4}, // Пятая буква "и"
        {word: "феномен", correctPosition: 3}, // Четвертая буква "о"
        {word: "хлебцы", correctPosition: 2}, // Третья буква "е"
        {word: "ходатай", correctPosition: 3}, // Четвертая буква "а"
        {word: "ходатайство", correctPosition: 3}, // Четвертая буква "а"
        {word: "христианин", correctPosition: 8}, // Девятая буква "и"
        {word: "цемент", correctPosition: 3}, // Четвертая буква "е"
        {word: "центнер", correctPosition: 1}, // Вторая буква "е"
        {word: "цепочка", correctPosition: 3}, // Четвертая буква "о"
        {word: "черпать", correctPosition: 1}, // Вторая буква "е"
        {word: "шарфы", correctPosition: 1}, // Вторая буква "а"
        {word: "шофер", correctPosition: 3}, // Четвертая буква "е"
        {
            word: "шрифта", correctPosition: 2, context: {
                left: "(начертание) ",
                right: null,
            }
        }, // Третья буква "и"
        {word: "щавель", correctPosition: 3}, // Четвертая буква "е"
        {word: "щемит", correctPosition: 3}, // Четвертая буква "и"
        {word: "экипировать", correctPosition: 8}, // Девятая буква "а"
        {word: "ясли", correctPosition: 0}, // Первая буква "я"
        {word: "яслей", correctPosition: 0}, // Первая буква "я"
        {word: "кровоточащий", correctPosition: 8}, // Девятая буква "а"
        {word: "заплесневеть", correctPosition: 4}, // Пятая буква "е"
        {word: "запломбировать", correctPosition: 11}, // Двенадцатая буква "а"
        {word: "дозировать", correctPosition: 3}, // Четвертая буква "и"
        {word: "жалюзи", correctPosition: 5}, // Шестая буква "и"
        {word: "гербовый", correctPosition: 1}, // Вторая буква "е"
        {word: "вероисповедание", correctPosition: 9}, // Десятая буква "е"
        {word: "апостроф", correctPosition: 6}, // Седьмая буква "о"
        {word: "балованный", correctPosition: 3}, // Четвертая буква "о"
        {word: "генезис", correctPosition: 1}, // Вторая буква "е"
        {word: "бунгало", correctPosition: 1}, // Вторая буква "у"
        {word: "издревле", correctPosition: 4}, // Пятая буква "е"
        {word: "исчерпать", correctPosition: 3}, // Четвертая буква "е"
        {word: "закупорить", correctPosition: 3}, // Четвертая буква "у"
        {word: "диспансер", correctPosition: 7}, // Восьмая буква "е"
        {word: "завидно", correctPosition: 3}, // Четвертая буква "и"
    ],
    set5: [
        {word: "банты", correctPosition: 1}, // Вторая буква "а"
        {word: "бармен", correctPosition: 1}, // Вторая буква "а"
        {word: "благовест", correctPosition: 2}, // Третья буква "а"
        {word: "бочковый", correctPosition: 1}, // Вторая буква "о"
        {word: "грушевый", correctPosition: 2}, // Третья буква "у"
        {word: "иконопись", correctPosition: 0}, // Первая буква "и"
        {word: "кашлянуть", correctPosition: 1}, // Вторая буква "а"
        {word: "кухонный", correctPosition: 1}, // Вторая буква "у"
        {word: "свекла", correctPosition: 2}, // Третья буква "е"
        {word: "сливовый", correctPosition: 2}, // Третья буква "и"
        {word: "торты", correctPosition: 1}, // Вторая буква "о"
        {word: "корты", correctPosition: 1}, // Вторая буква "о"
        {word: "знамение", correctPosition: 2}, // Третья буква "а"
        {word: "знахарка", correctPosition: 2}, // Третья буква "а"
        {word: "катарсис", correctPosition: 1}, // Вторая буква "а"
        {word: "колледж", correctPosition: 1}, // Вторая буква "о"
        {word: "мельком", correctPosition: 1}, // Вторая буква "е"
        {word: "ненависть", correctPosition: 1}, // Вторая буква "е"
        {word: "пахота", correctPosition: 1}, // Вторая буква "а"
        {word: "средства", correctPosition: 2}, // Третья буква "е"
        {word: "свитер", correctPosition: 2}, // Третья буква "и"
        {word: "темп", correctPosition: 1}, // Вторая буква "е"
        {word: "форзац", correctPosition: 1}, // Вторая буква "о"
        {word: "черпать", correctPosition: 1}, // Вторая буква "е"
        {word: "догмат", correctPosition: 1}, // Вторая буква "о"
        {word: "арахис", correctPosition: 2}, // Третья буква "а"
        {word: "береста", correctPosition: 3}, // Четвертая буква "е"
        {
            word: "броня", correctPosition: 4, context: {
                left: null,
                right: " (но брОня)",
            }
        }, // Пятая буква "я"
        {word: "добыча", correctPosition: 3}, // Четвертая буква "ы"
        {word: "досуг", correctPosition: 3}, // Четвертая буква "у"
        {word: "дремота", correctPosition: 4}, // Пятая буква "о"
        {word: "завидно", correctPosition: 3}, // Четвертая буква "и"
        {word: "закупорка", correctPosition: 3}, // Четвертая буква "у"
        {word: "звонит", correctPosition: 4}, // Пятая буква "и"
        {word: "зимовщик", correctPosition: 3}, // Четвертая буква "о"
        {word: "исчерпать", correctPosition: 3}, // Четвертая буква "е"
        {word: "квартал", correctPosition: 5}, // Шестая буква "а"
        {word: "красивее", correctPosition: 4}, // Пятая буква "и"
        {word: "мизерный", correctPosition: 3}, // Четвертая буква "е"
        {word: "мышление", correctPosition: 4}, // Пятая буква "е"
        {word: "намерение", correctPosition: 3}, // Четвертая буква "е"
        {word: "оптовый", correctPosition: 3}, // Четвертая буква "о"
        {word: "прибывший", correctPosition: 4}, // Пятая буква "ы"
        {word: "пуловер", correctPosition: 3}, // Четвертая буква "о"
        {word: "столяр", correctPosition: 4}, // Пятая буква "я"
        {word: "танцовщица", correctPosition: 4}, // Пятая буква "о"
        {word: "феномен", correctPosition: 3}, // Четвертая буква "о"
        {word: "ходатайство", correctPosition: 3}, // Четвертая буква "а"
        {word: "щавель", correctPosition: 3}, // Четвертая буква "е"
        {word: "эксперт", correctPosition: 4}, // Пятая буква "е"
        {word: "августовский", correctPosition: 0}, // Первая буква "а"
        {word: "корысть", correctPosition: 3}, // Четвертая буква "ы"
        {word: "крестьянин", correctPosition: 6}, // Седьмая буква "я"
        {word: "загнутый", correctPosition: 1}, // Вторая буква "а"
        {word: "засветло", correctPosition: 1}, // Вторая буква "а"
        {word: "древко", correctPosition: 2}, // Третья буква "е"
        {word: "доверху", correctPosition: 1}, // Вторая буква "о"
        {word: "воссоздала", correctPosition: 9}, // Десятая буква "а"
        {word: "агент", correctPosition: 2}, // Третья буква "е"
        {word: "анатом", correctPosition: 2}, // Третья буква "а"
        {word: "памятуя", correctPosition: 1}, // Вторая буква "а"
        {word: "аэропорты", correctPosition: 5}, // Шестая буква "о"
        {word: "докрасна", correctPosition: 7}, // Восьмая буква "а"
    ],
    set6: [
        {word: "алкоголь", correctPosition: 5}, // Шестая буква "о"
        {word: "антитеза", correctPosition: 5}, // Шестая буква "е"
        {word: "апостроф", correctPosition: 6}, // Седьмая буква "о"
        {word: "баловать", correctPosition: 5}, // Шестая буква "а"
        {word: "гастрономия", correctPosition: 7}, // Восьмая буква "о"
        {word: "договор", correctPosition: 5}, // Шестая буква "о"
        {word: "дерматин", correctPosition: 6}, // Седьмая буква "и"
        {word: "диспансер", correctPosition: 7}, // Восьмая буква "е"
        {word: "дочерна", correctPosition: 6}, // Седьмая буква "а"
        {word: "еретик", correctPosition: 4}, // Пятая буква "и"
        {word: "жалюзи", correctPosition: 5}, // Шестая буква "и"
        {word: "информировать", correctPosition: 6}, // Седьмая буква "и"
        {word: "каталог", correctPosition: 5}, // Шестая буква "о"
        {
            word: "кулинария", correctPositions: [5, 7], context: {
                left: null,
                right: " (два ударения правильные)",
            }
        }, // Шестая буква "а", восьмая буква "и"
        {word: "лососевый", correctPosition: 5}, // Шестая буква "е"
        {word: "начата", correctPosition: 5}, // Шестая буква "а"
        {word: "некролог", correctPosition: 6}, // Седьмая буква "о"
        {word: "обеспечение", correctPosition: 5}, // Шестая буква "е"
        {word: "облегчить", correctPosition: 6}, // Седьмая буква "и"
        {word: "опериться", correctPosition: 4}, // Пятая буква "и"
        {word: "пиала", correctPosition: 4}, // Пятая буква "а"
        {word: "приговор", correctPosition: 6}, // Седьмая буква "о"
        {word: "соболезнование", correctPosition: 5}, // Шестая буква "е"
        {word: "украинский", correctPosition: 4}, // Пятая буква "и"
        {word: "гренадер", correctPosition: 6}, // Седьмая буква "е"
        {word: "нефтепровод", correctPosition: 9}, // Десятая буква "о"
        {word: "новорожденный", correctPosition: 8}, // Девятая буква "е"
        {word: "переключит", correctPosition: 8}, // Девятая буква "и"
        {word: "аристократия", correctPosition: 8}, // Девятая буква "а"
        {word: "асимметрия", correctPosition: 8}, // Девятая буква "и"
        {word: "благоволить", correctPosition: 8}, // Девятая буква "и"
        {word: "изобретение", correctPosition: 7}, // Восьмая буква "е"
        {word: "кинематография", correctPosition: 10}, // Одиннадцатая буква "а"
        {word: "металлургия", correctPosition: 9}, // Десятая буква "и"
        {word: "патриархия", correctPosition: 8}, // Девятая буква "и"
        {word: "премировать", correctPosition: 8}, // Девятая буква "а"
        {word: "сосредоточение", correctPosition: 8}, // Девятая буква "о"
        {word: "тенденция", correctPosition: 4}, // Пятая буква "е"
        {word: "флюорография", correctPosition: 8}, // Девятая буква "а"
        {word: "формировать", correctPosition: 8}, // Девятая буква "а"
        {word: "христианин", correctPosition: 8}, // Девятая буква "и"
        {word: "избалованный", correctPosition: 5}, // Шестая буква "о"
        {word: "жилось", correctPosition: 3}, // Четвертая буква "о"
        {word: "зимовщик", correctPosition: 3}, // Четвертая буква "о"
        {word: "кашлянуть", correctPosition: 1}, // Вторая буква "а"
        {word: "дозировать", correctPosition: 3}, // Четвертая буква "и"
        {word: "верна", correctPosition: 4}, // Пятая буква "а"
        {word: "верба", correctPosition: 1}, // Вторая буква "е"
        {word: "мастерски", correctPosition: 8}, // Девятая буква "и"
        {word: "деньги", correctPosition: 1}, // Вторая буква "е"
        {word: "деньгам", correctPosition: 5}, // Шестая буква "а"
        {word: "деньгами", correctPosition: 5}, // Шестая буква "а"
        {
            word: "деньгах", correctPosition: 5, context: {
                left: "о  ",
                right: null,
            }
        }, // Шестая буква "а"
        {word: "загодя", correctPosition: 1}, // Вторая буква "а"
        {word: "мизерный", correctPosition: 3}, // Четвертая буква "е"
        {word: "накренит", correctPosition: 6}, // Седьмая буква "и"
        {
            word: "ногтя", correctPosition: 1, context: {
                left: null,
                right: " (р.п.)",
            }
        }, // Вторая буква "о"
        {word: "сверлит", correctPosition: 5}, // Шестая буква "и"
        {word: "значимость", correctPosition: 2}, // Третья буква "а"
        {
            word: "клешни", correctPosition: 5, context: {
                left: null,
                right: " (мн.ч.)",
            }
        }, // Шестая буква "и"
        {
            word: "клешнями", correctPosition: 5, context: {
                left: null,
                right: " (мн.ч., т.п.)",
            }
        }, // Шестая буква "я"
        {word: "инстинкт", correctPosition: 4}, // Пятая буква "и"
        {word: "документ", correctPosition: 5}, // Шестая буква "е"
    ],
    set7: [
        {
            word: "занятое", correctPosition: 1, context: {
                left: null,
                right: " место",
            }
        }, // Вторая буква "а"
        {
            word: "занятой", correctPosition: 5, context: {
                left: null,
                right: " человек",
            }
        }, // Шестая буква "о"
        {
            word: "гуся", correctPosition: 1, context: {
                left: "нет ",
                right: null,
            }
        }, // Вторая буква "у"
        {word: "осведомить", correctPosition: 3}, // Четвертая буква "е"
        {word: "поименный", correctPosition: 4}, // Пятая буква "е"
        {word: "предвосхитить", correctPosition: 8}, // Девятая буква "и"
        {word: "новорожденный", correctPosition: 8}, // Девятая буква "е"
        {word: "премировать", correctPosition: 8}, // Девятая буква "а"
        {word: "премированный", correctPosition: 6}, // Седьмая буква "о"
        {word: "партер", correctPosition: 4}, // Пятая буква "е"
        {word: "подростковый", correctPosition: 4}, // Пятая буква "о"
        {word: "маркетинг", correctPosition: 1}, // Вторая буква "а"
        {word: "созыв", correctPosition: 3}, // Четвертая буква "ы"
        {
            word: "прояснилось", correctPosition: 3, context: {
                left: "небо ",
                right: null,
            }
        }, // Четвертая буква "я"
        {
            word: "прояснились", correctPosition: 6, context: {
                left: "мысли ",
                right: null,
            }
        }, // Седьмая буква "и"
        {word: "статут", correctPosition: 4}, // Пятая буква "у"
        {word: "генезис", correctPosition: 1}, // Вторая буква "е"
        {word: "жалюзи", correctPosition: 5}, // Шестая буква "и"
        {word: "иконопись", correctPosition: 0}, // Первая буква "и"
        {word: "столяр", correctPosition: 4}, // Пятая буква "я"
        {word: "третировать", correctPosition: 4}, // Пятая буква "и"
        {word: "уведомить", correctPosition: 2}, // Третья буква "е"
        {word: "месяцы", correctPosition: 1}, // Вторая буква "е"
        {word: "мельком", correctPosition: 1}, // Вторая буква "е"
        {word: "уведомленный", correctPosition: 2}, // Третья буква "е"
        {word: "апостроф", correctPosition: 6}, // Седьмая буква "о"
        {word: "диспансер", correctPosition: 7}, // Восьмая буква "е"
        {word: "умерший", correctPosition: 2}, // Третья буква "е"
        {word: "упрочение", correctPosition: 3}, // Четвертая буква "о"
        {word: "отрочество", correctPosition: 0}, // Первая буква "о"
        {word: "принудить", correctPosition: 4}, // Пятая буква "у"
        {word: "феномен", correctPosition: 3}, // Четвертая буква "о"
        {word: "скольким", correctPosition: 2}, // Третья буква "о"
        {word: "приняты", correctPosition: 2}, // Третья буква "и"
        {
            word: "принята", correctPosition: 6, context: {
                left: "она ",
                right: null,
            }
        }, // Седьмая буква "а"
        {word: "фетиш", correctPosition: 3}, // Четвертая буква "и"
        {word: "филистер", correctPosition: 3}, // Четвертая буква "и"
        {word: "ходатайство", correctPosition: 3}, // Четвертая буква "а"
        {word: "ходатайствовать", correctPosition: 3}, // Четвертая буква "а"
        {
            word: "начата", correctPosition: 5, context: {
                left: "работа ",
                right: null,
            }
        }, // Шестая буква "а"
        {
            word: "созвана", correctPosition: 6, context: {
                left: "конференция ",
                right: null,
            }
        }, // Седьмая буква "а"
        {word: "сосредоточение", correctPosition: 8}, // Девятая буква "о"
        {word: "щавель", correctPosition: 3}, // Четвертая буква "е"
        {word: "склады", correctPosition: 3}, // Четвертая буква "а"
        {
            word: "клала", correctPosition: 2, context: {
                left: "она ",
                right: null,
            }
        }, // Третья буква "а"
        {
            word: "прибыл", correctPosition: 2, context: {
                left: "он ",
                right: null,
            }
        }, // Третья буква "и"
        {
            word: "прибыла", correctPosition: 6, context: {
                left: "она ",
                right: null,
            }
        }, // Седьмая буква "а"
        {word: "эксперт", correctPosition: 4}, // Пятая буква "е"
    ],
    set8: [
        {word: "экспертный", correctPosition: 4}, // Пятая буква "е"
        {word: "раздана", correctPosition: 6, context: {
                left: "продукция ",
                right: null,
            } }, // Судьмая буква "а"
        {word: "аристократия", correctPosition: 8}, // Девятая буква "а"
        {word: "кинематография", correctPosition: 10}, // Одиннадцатая буква "а"
        {word: "танцовщик", correctPosition: 4}, // Пятая буква "о"
        {
            word: "атлас", correctPosition: 3, context: {
                left: null,
                right: " (материя)",
            }
        }, // Четвертая буква "а"
        {
            word: "атлас", correctPosition: 0, context: {
                left: null,
                right: " (карта)",
            }
        }, // Первая буква "а"
        {word: "банты", correctPosition: 1}, // Вторая буква "а"
        {word: "безудержный", correctPosition: 3}, // Четвертая буква "у"
        {word: "заиндеветь", correctPosition: 2}, // Третья буква "и"
        {
            word: "задала", correctPosition: 5, context: {
                left: "она ",
                right: null,
            }
        }, // Шестая буква "а"
        {word: "зубчатый", correctPosition: 4}, // Пятая буква "а"
        {
            word: "коротка", correctPosition: 6, context: {
                left: "она ",
                right: null,
            }
        }, // Седьмая буква "а"
        {
            word: "начала", correctPosition: 5, context: {
                left: "она ",
                right: null,
            }
        }, // Шестая буква "а"
        {
            word: "коротки", correctPosition: 1, context: {
                left: "они ",
                right: null,
            }
        }, // Вторая буква "о"
        {
            word: "начали", correctPosition: 1, context: {
                left: "они ",
                right: null,
            }
        }, // Вторая буква "а"
        {word: "усугубить", correctPosition: 6}, // Седьмая буква "и"
        {
            word: "пережитое", correctPosition: 7, context: {
                left: "все ",
                right: null,
            }
        }, // Восьмая буква "о"
        {
            word: "пережитое", correctPosition: 5, context: {
                left: null,
                right: " горе",
            }
        }, // Шестая буква "и"
        {
            word: "включит", correctPosition: 5, context: {
                left: "он ",
                right: null,
            }
        }, // Шестая буква "и"
        {
            word: "переключит", correctPosition: 8, context: {
                left: "он ",
                right: null,
            }
        }, // Девятая буква "и"
        {
            word: "отобрали", correctPosition: 5, context: {
                left: "они ",
                right: null,
            }
        }, // Шестая буква "а"
        {
            word: "отобрала", correctPosition: 7, context: {
                left: "она ",
                right: null,
            }
        }, // Восьмая буква "а"
        {word: "ветеринария", correctPosition: 7}, // Восьмая буква "а"
        {
            word: "аэропортов", correctPosition: 5, context: {
                left: "много ",
                right: null,
            }
        }, // Шестая буква "о"
        {word: "согнутый", correctPosition: 1}, // Вторая буква "о"
        {word: "сливовый", correctPosition: 2}, // Третья буква "и"
        {
            word: "придралась", correctPosition: 7, context: {
                left: "она ",
                right: null,
            }
        }, // Восьмая буква "а"
        {word: "должностей", correctPosition: 8}, // Девятая буква "е"
        {
            word: "сорвала", correctPosition: 6, context: {
                left: "она ",
                right: null,
            }
        }, // Седьмая буква "а"
        {
            word: "допила", correctPosition: 5, context: {
                left: "она ",
                right: null,
            }
        }, // Шестая буква "а"
        {
            word: "избалован", correctPosition: 5, context: {
                left: "он ",
                right: null,
            }
        }, // Шестая буква "о"
        {
            word: "острога", correctPosition: 6 }, // Седьмая буква "а"
        {
            word: "создалась", correctPosition: 6 }, // Седьмая буква "а"
        {
            word: "блюда", correctPosition: 2, context: {
                left: "первые ",
                right: null,
            }
        }, // Третья буква "ю"
        {
            word: "юкка", correctPosition: 0, context: {
                left: null,
                right: " (вечнозеленое растение)",
            }
        }, // Первая буква "ю"
        {word: "торты", correctPosition: 1}, // Вторая буква "о"
        {word: "гегемония", correctPosition: 5}, // Шестая буква "о"
        {word: "пасквиль", correctPosition: 1}, // Вторая буква "а"
        {word: "цехи", correctPosition: 1}, // Вторая буква "е"
        {
            word: "нужно", correctPosition: 1, context: {
                left: "оно ",
                right: null,
            }
        }, // Вторая буква "у"
        {word: "коклюш", correctPosition: 4}, // Пятая буква "ю"
        {word: "ломота", correctPosition: 3}, // Четвертая буква "о"
        {word: "деньгам", correctPosition: 5}, // Шестая буква "а"
        {word: "включенный", correctPosition: 5}, // Шестая буква "е"
        {
            word: "толика", correctPosition: 3, context: {
                left: "малая ",
                right: null,
            }
        }, // Четвертая буква "и"
        {
            word: "отдал", correctPosition: 3, context: {
                left: "он ",
                right: null,
            }
        }, // Четвертая буква "а"
        {
            word: "отдали", correctPosition: 3, context: {
                left: "они ",
                right: null,
            }
        }, // Четвертая буква "а"
    ],
    set9: [
        {word: "отдавший", correctPosition: 3}, // Четвертая буква "а"
        {word: "отданный", correctPosition: 0}, // Первая буква "о"
        {word: "пиала", correctPosition: 4}, // Пятая буква "а"
        {word: "прищемит", correctPosition: 6}, // Седьмая буква "и"
        {
            word: "стрельну", correctPosition: 7, context: {
                left: "я ",
                right: null,
            }
        }, // Восьмая буква "у"
        {word: "изогнутый", correctPosition: 2}, // Третья буква "о"
        {
            word: "клялась", correctPosition: 4, context: {
                left: "она ",
                right: null,
            }
        }, // Пятая буква "а"
        {word: "приняв", correctPosition: 4}, // Пятая буква "я"
        {word: "могущий", correctPosition: 3}, // Четвертая буква "у"
        {word: "мозаичный", correctPosition: 4}, // Пятая буква "и"
        {
            word: "косится", correctPosition: 3, context: {
                left: "он ",
                right: null,
            }
        }, // Четвертая буква "и"
        {
            word: "долбит", correctPosition: 4, context: {
                left: "он ",
                right: null,
            }
        }, // Пятая буква "и"
        {word: "длиннота", correctPosition: 7}, // Восьмая буква "а"
        {word: "занозить", correctPosition: 5}, // Шестая буква "и"
        {word: "дозировать", correctPosition: 3}, // Четвертая буква "и"
        {
            word: "взята", correctPosition: 4, context: {
                left: "книга ",
                right: null,
            }
        }, // Пятая буква "а"
        {word: "гренки", correctPosition: 5}, // Шестая буква "и"
        {
            word: "багрить", correctPosition: 4, context: {
                left: null,
                right: " (окрашивать в багровый цвет)",
            }
        }, // Пятая буква "и"
        {
            word: "багрить", correctPosition: 1, context: {
                left: null,
                right: " (доставать багром)",
            }
        }, // Вторая буква "а"
        {word: "ядровый", correctPosition: 3}, // Четвертая буква "о"
        {word: "ягдташ", correctPosition: 4}, // Пятая буква "а"
        {word: "творог", correctPosition: 4}, // Пятая буква "о"
        {word: "порты", correctPosition: 1}, // Вторая буква "о"
        {word: "принявший", correctPosition: 4}, // Пятая буква "я"
        {
            word: "кабелей", correctPosition: 1, context: {
                left: "много ",
                right: null,
            }
        }, // Вторая буква "а"
        {
            word: "местностей", correctPosition: 1, context: {
                left: "много ",
                right: null,
            }
        }, // Вторая буква "е"
        {
            word: "поднялась", correctPosition: 6, context: {
                left: "она ",
                right: null,
            }
        }, // Седьмая буква "а"
        {
            word: "туфель", correctPosition: 1, context: {
                left: "пара ",
                right: null,
            }
        }, // Вторая буква "у"
        {word: "туфля", correctPosition: 1}, // Вторая буква "у"
        {word: "прозорливый", correctPosition: 7}, // Восьмая буква "и"
        {
            word: "инструктажа", correctPosition: 8, context: {
                left: "без ",
                right: null,
            }
        }, // Девятая буква "а"
        {word: "дремота", correctPosition: 4}, // Пятая буква "о"
        {word: "прирученный", correctPosition: 6}, // Седьмая буква "е"
        {word: "мусоропровод", correctPosition: 10}, // Одиннадцатая буква "о"
        {word: "баловать", correctPosition: 5}, // Шестая буква "а"
        {
            word: "косу", correctPosition: 1, context: {
                left: "заплести ",
                right: null,
            }
        }, // Вторая буква "о"
        {
            word: "косу", correctPosition: 3, context: {
                left: "наточить ",
                right: null,
            }
        }, // Четвертая буква "у"
        {word: "кремень", correctPosition: 4}, // Пятая буква "е"
        {word: "плато", correctPosition: 4}, // Пятая буква "о"
        {word: "кровоточить", correctPosition: 8}, // Девятая буква "и"
        {word: "кровоточащий", correctPosition: 8}, // Девятая буква "а"
        {
            word: "кровоточит", correctPosition: 8, context: {
                left: "рана ",
                right: null,
            }
        }, // Девятая буква "и"
        {
            word: "кралась", correctPosition: 2, context: {
                left: "она ",
                right: null,
            }
        }, // Третья буква "а"
        {
            word: "добыла", correctPosition: 5, context: {
                left: "она ",
                right: null,
            }
        }, // Шестая буква "а"
        {
            word: "жилось", correctPosition: 3, context: {
                left: "ему ",
                right: " хорошо",
            }
        }, // Четвертая буква "о"
        {word: "досуха", correctPosition: 1}, // Вторая буква "о"
        {
            word: "средам", correctPosition: 4, context: {
                left: "по ",
                right: null,
            }
        }, // Пятая буква "а"
        {word: "начав", correctPosition: 3}, // Четвертая буква "а"
        {
            word: "сорит", correctPosition: 3, context: {
                left: "он ",
                right: null,
            }
        }, // Четвертая буква "и"
        {word: "опошлить", correctPosition: 2}, // Третья буква "о"
        {word: "пломбировать", correctPosition: 9}, // Десятая буква "а"
        {word: "шарфы", correctPosition: 1}, // Вторая буква "а"
        {word: "красивейший", correctPosition: 4}, // Пятая буква "и"
        {
            word: "сверлит", correctPosition: 5, context: {
                left: "он ",
                right: null,
            }
        }, // Шестая буква "и"
        {
            word: "одолжишь", correctPosition: 5, context: {
                left: "ты ",
                right: null,
            }
        }, // Шестая буква "и"
        {word: "хаос", correctPosition: 1}, // Вторая буква "а"
        {word: "статус", correctPosition: 2}, // Третья буква "а"
        {word: "кружева", correctPosition: 6}, // Седьмая буква "а"
        {word: "исчерпав", correctPosition: 3}, // Четвертая буква "е"
    ],
    set10: [
        {word: "дефис", correctPosition: 3}, // Четвертая буква "и"
        {word: "договор", correctPosition: 5}, // Шестая буква "о"
        {word: "втридорога", correctPosition: 3}, // Четвертая буква "и"
        {word: "аналог", correctPosition: 2}, // Третья буква "а"
        {word: "валовой", correctPosition: 5}, // Шестая буква "о"
        {word: "бензопровод", correctPosition: 9}, // Десятая буква "о"
        {word: "газопровод", correctPosition: 8}, // Девятая буква "о"
        {word: "нефтепровод", correctPosition: 9}, // Десятая буква "о"
        {word: "путепровод", correctPosition: 8}, // Девятая буква "о"
        {word: "верование", correctPosition: 1}, // Вторая буква "е"
        {word: "завидно", correctPosition: 3}, // Четвертая буква "и"
        {word: "выговоры", correctPosition: 1}, // Вторая буква "ы"
        {word: "еретик", correctPosition: 4}, // Пятая буква "и"
        {word: "квартал", correctPosition: 5}, // Шестая буква "а"
        {word: "каталог", correctPosition: 5}, // Шестая буква "о"
        {word: "свекла", correctPosition: 2}, // Третья буква "е"
        {word: "издавна", correctPosition: 0}, // Первая буква "и"
        {word: "исподволь", correctPosition: 0}, // Первая буква "и"
        {
            word: "звонишь", correctPosition: 4, context: {
                left: "ты ",
                right: null,
            }
        }, // Пятая буква "и"
        {word: "задолго", correctPosition: 3}, // Четвертая буква "о"
        {word: "анатом", correctPosition: 2}, // Третья буква "а"
        {word: "гербовый", correctPosition: 1}, // Вторая буква "е"
        {word: "закупорить", correctPosition: 3}, // Четвертая буква "у"
        {word: "каучук", correctPosition: 4}, // Пятая буква "у"
        {word: "исчерпать", correctPosition: 3}, // Четвертая буква "е"
        {word: "кухонный", correctPosition: 1}, // Вторая буква "у"
        {word: "красивее", correctPosition: 4}, // Пятая буква "и"
        {word: "памятовать", correctPosition: 1}, // Вторая буква "а"
        {word: "памятуя", correctPosition: 1}, // Вторая буква "а"
        {word: "мизерный", correctPosition: 3}, // Четвертая буква "е"
        {word: "кладовая", correctPosition: 6}, // Седьмая буква "а"
        {word: "вероисповедание", correctPosition: 9}, // Десятая буква "е"
        {word: "средства", correctPosition: 2}, // Третья буква "е"
        {word: "мышление", correctPosition: 4}, // Пятая буква "е"
        {word: "фланговый", correctPosition: 2}, // Третья буква "а"
        {word: "некролог", correctPosition: 6}, // Седьмая буква "о"
        {word: "знамение", correctPosition: 2}, // Третья буква "а"
        {
            word: "начал", correctPosition: 1, context: {
                left: "он ",
                right: null,
            }
        }, // Вторая буква "а"
        {word: "начался", correctPosition: 6, context: {
                left: "урок ",
                right: null,
            } }, // Седьмая буква "я"
        {
            word: "началась", correctPosition: 5, context: {
                left: "встреча ",
                right: null,
            }
        }, // Шестая буква "а"
        {word: "обеспечение", correctPosition: 5}, // Шестая буква "е"
        {word: "группировать", correctPosition: 9}, // Десятая буква "а"
        {word: "договоренность", correctPosition: 7}, // Восьмая буква "е"
        {word: "нормировать", correctPosition: 8}, // Девятая буква "а"
        {word: "нормирование", correctPosition: 8}, // Девятая буква "а"
        {word: "нормированный", correctPosition: 6}, // Седьмая буква "о"
        {
            word: "варишь", correctPosition: 1, context: {
                left: "ты ",
                right: null,
            }
        }, // Вторая буква "а"
        {word: "облегчить", correctPosition: 6}, // Седьмая буква "и"
        {word: "осмысление", correctPosition: 6}, // Седьмая буква "е"
        {word: "избаловать", correctPosition: 7}, // Восьмая буква "а"
        {word: "сирота", correctPosition: 5}, // Шестая буква "а"
        {word: "сироты", correctPosition: 3}, // Четвертая буква "о"
        {word: "углубить", correctPosition: 5}, // Шестая буква "и"
        {word: "украинец", correctPosition: 4}, // Пятая буква "и"
        {word: "оптовый", correctPosition: 3}, // Четвертая буква "о"
        {word: "избалованный", correctPosition: 5}, // Шестая буква "о"
        {word: "избалованность", correctPosition: 5}, // Шестая буква "о"
        {word: "балованный", correctPosition: 3}, // Четвертая буква "о"
        {word: "баловать", correctPosition: 5}, // Шестая буква "а"
        {word: "избаловать", correctPosition: 7}, // Восьмая буква "а"
        {word: "баловник", correctPosition: 6}, // Седьмая буква "и"
        {word: "баловство", correctPosition: 8}, // Девятая буква "о"
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

// ОБНОВЛЕННАЯ ФУНКЦИЯ displayWord
function displayWord() {
    wordContainer.innerHTML = '';
    messageElem.textContent = '';
    messageElem.className = 'message';

    const currentWord = words[currentWordIndex];
    const currentState = wordStates[currentWordIndex];

    currentWordIndexElem.textContent = currentWordIndex + 1;

    // Создаем контейнер для всей строки
    const lineContainer = document.createElement('div');
    lineContainer.className = 'word-line';

    // Добавляем левое слово (если есть)
    if (currentWord.context && currentWord.context.left) {
        const leftWord = document.createElement('span');
        leftWord.textContent = currentWord.context.left + ' ';
        leftWord.className = 'context-word';
        lineContainer.appendChild(leftWord);
    }

    // Добавляем основное слово (проверяемое)
    currentWord.word.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.dataset.index = index;

        if (isVowel(letter)) {
            span.className = 'letter';

            if (currentState.completed) {
                span.classList.add('disabled');
                // Проверяем, была ли эта буква выбрана как правильная
                if (index === currentState.selectedLetterIndex) {
                    span.classList.add('correct');
                }
            } else {
                span.addEventListener('click', handleLetterClick);
                if (currentState.selectedLetterIndex === index && !currentState.isCorrect) {
                    span.classList.add('incorrect');
                }
            }
        } else {
            span.className = 'letter consonant';
        }

        lineContainer.appendChild(span);
    });

    // Добавляем правое слово (если есть)
    if (currentWord.context && currentWord.context.right) {
        const rightWord = document.createElement('span');
        rightWord.textContent = ' ' + currentWord.context.right;
        rightWord.className = 'context-word';
        lineContainer.appendChild(rightWord);
    }

    wordContainer.appendChild(lineContainer);

    // Показываем сообщение, если слово завершено
    if (currentState.completed) {
        showMessage('Правильно! ✅', 'success-message');
    }

    updateButtonStates();
}

// ОБНОВЛЕННАЯ ФУНКЦИЯ handleLetterClick (уже у вас есть, оставляем как есть)
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
    let isCorrect = false;

    // Если у слова несколько правильных позиций (новый формат)
    if (currentWord.correctPositions && Array.isArray(currentWord.correctPositions)) {
        isCorrect = currentWord.correctPositions.includes(index);
    }
    // Если у слова одна правильная позиция (старый формат)
    else if (currentWord.correctPosition !== undefined) {
        isCorrect = index === currentWord.correctPosition;
    }

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

// ОБНОВЛЕННАЯ ФУНКЦИЯ disableAllLetters
function disableAllLetters() {
    const letters = wordContainer.querySelectorAll('.letter');
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
