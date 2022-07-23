/* Все варианты ответов*/
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');
/*все наши вопросы массив*/
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); //сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'), //номер вопроса
  numberOfAllQuestions = document.getElementById('number-of-all-questions'); //кол-во всех вопросов

let indexOfQuestion, //индекс текущего вопроса
    indexOfPage = 0; //индекс страницы

const answersTracker = document.getElementById('answers-tracker'); //обертка для трекера

const btnNext = document.getElementById('btn-next'); //кнопка далее

let score = 0; //итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer'), //кол-во правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), //кол-во всех вопросов (в модальном окне)
      btnTryAgain = document.getElementById('btn-try-again'); //кнопка "начать викторину заново"

const questions = [
    {
        question: 'Как остановить цикл в JawaScritp?',
        options: [
                    'stop',
                    'delet',
                    'break',
                    'retutn',
        ],
        rightAnswer: 2
    },
    {
        question: 'Как вывести объект в консоль JawaScritp?',
        options: [
                'return()',
                'print()',
                'нельзя',
                'console.log()',
        ],
        rightAnswer: 3
    },
    {
        question: 'Сколько параметров можно передать функции?',
        options: [
                '1',
                'бесконечно',
                'до 10',
                'до 27',
        ],
        rightAnswer: 1
    }
];

numberOfAllQuestions.innerHTML = questions.length; //выводим общее кол-во вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // вставляем в HTML <div id="question"> сам вопрос

    // маппим ответы(вставляем)

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; //установка номера текущей страницы (0+1 чтобы была страница не была =0)
    indexOfPage++; // увеличение индекса страницы

};

let completeAnswers = []; //массив для уже заданных вопросов

const randomQuestion = () => {  // создаем случайное число для вопросов
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; //якорь для проверки одинаковых вопросов

    if(indexOfPage == questions.length){
        quizOver();
    } else {
        if(completeAnswers.length > 0){ //проверяет есть ли в массиве ответов уже что то или нет
            completeAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true; //если условие верно, т.е. уже был такой вопрос, то дальше не производим вычисления
                }
            });
            if(hitDuplicate){
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completeAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load(); 
        }
    }
    completeAnswers.push(indexOfQuestion);
};

//Узнаем куда кликнул пользователь
const checkAnswer = el => {       //функция правильности ответа
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct'); // дали правильный ответ, присвоили кнопке нужный цвет
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
};

for(option of optionElements){
    option.addEventListener('click', e => checkAnswer(e));
}
// эта функция при нажатии один раз блокирует второй раз нажатие, и если ответили не правильно, то показывает верный ответ
const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('correct');
        }
    })
}

// при переходе на другую страницу с ответами, мы должны очистить все присвоенные классы со всех ответов
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

//организовываем точки внизу, их будет столько, сколько вопросов
const answerTracker = () =>{
    questions.forEach(() => {
        const div = document.createElement('div'); //создаем элемент div, которого раньше не было
        answersTracker.appendChild(div); //добавляем элемент div
    })
};

//присваеваем точкам цвета при ответах(добавление классов на точки)
const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

// если не сделал ответ, то не сможешь перейти на другой уровень
const validate = () => {
    if(!optionElements[0].classList.contains('disabled')){
        alert('Вам нужно выбрать один из вариантов ответа');
    } else {
        randomQuestion();
        enableOptions();
    }
}
// модальное окно, финишный результат
const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score; //добавляем кол-во правильных ответов
    numberOfAllQuestions2.innerHTML = questions.length;//добавляем общее кол-воответов
}

//активация кнопки "попробуй снова"
const tryAgain = () => {
    window.location.reload(); //перезагрузит страницу
}
// при нажатии на кнопку "попробуй снова" будет перезагрузка страницы
btnTryAgain.addEventListener('click', tryAgain);

//при нажатии на кнопку btn вызываем функцию очистки, для перехода на другую страницу
btnNext.addEventListener('click', () => {
    validate();
})

window.addEventListener('load', () => {  //после загрузки всего HTML запускаем функцию, которая отправит значения наших вопросов в Divы
    randomQuestion();
    answerTracker();
})