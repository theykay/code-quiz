// array of objects containing question, answers, correct answer
// question/answer inspiration from https://quizlet.com/117039332/javascript-quiz-flash-cards/
// and https://quizlet.com/314467748/w3schools-javascript-quiz-flash-cards/
let info = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            '\<javascript\>',
            '\<js\>',
            '\<script\>',
            '\<scripting\>'
        ],
        correct: '\<script\>'
    },
    {
        question: 'Where is the correct place to insert the JavaScript?',
        answers: [
            'In the \<head\> section',
            'In the \<body\> section',
            'Both \<head\> and \<body\> section are correct',
            'Both \<head\> and \<body\> are correct, but best practice is at the end of the \<body\>'
        ],
        correct: 'Both \<head\> and \<body\> are correct, but best practice is at the end of the \<body\>'
    },
    {
        question: 'What is the best syntax for referring to an external script called xxx.js?',
        answers: [
            '\<script src=\'\.\/xxx.js\'\>',
            '\<script name=\'xxx.js\'\>',
            '\<script href=\'xxx.js\'\>',
            '\<script src=\'xxx.js\'\>'
        ],
        correct: '\<script src=\'\.\/xxx.js\'\>'
    },
    {
        question: 'An external JavaScript must contain the \<script\> tag',
        answers: [
            'true',
            'false'
        ],
        correct: 'false'
    },
    {
        question: 'How do you create a function titled \'myFunction\'\?',
        answers: [
            'function\:myFunction()',
            'function\=myFunction()',
            'function myFunction()',
            'function\.myFunction()'
        ],
        correct: 'function myFunction()'
    },
    {
        question: 'How do you call a function called \'myFunction\'\?',
        answers: [
            'call myFunction()',
            'myFunction()',
            'call\.myFunction',
            'function myFunction()'
        ],
        correct: 'myFunction()',
    },
    {
        question: 'How do you write a conditional statement for executing some statements only if a variable \'i\' is equal to 5\?',
        answers: [
            'if i\=\=5 then',
            'if \(i\=5\)',
            'if \(i\=\=5\)',
            'if i\=5'
        ],
        correct: 'if \(i\=\=5\)'
    },
    {
        question: 'How do you add a comment in a JavaScript?',
        answers: [
            '\<\!\-\-comment\-\-\>',
            '\*\*comment',
            '\/\/ comment',
            '\(\(comment\)\)'
        ],
        correct: '\/\/ comment'
    },
    {
        question: 'What is a correct way to declare an array called \'myArray\' containing the elements \'red\'\, \'yellow\'\, \'blue\'?',
        answers: [
            'let myArray = \[\'red\'\,\'yellow\'\,\'blue\'\]',
            'array myArray = \'red\'\,\'yellow\'\,\'blue\'',
            'let myArray = array\(red\, yellow\, blue\)',
            'myArray = \[\'red\'\,\'yellow\'\,\'blue\'\]'
        ],
        correct: 'let myArray = \[\'red\'\,\'yellow\'\,\'blue\'\]'
    },
    {
        question: 'A named element in JavaScript that is used to store and retrieve data from is a\:',
        answers: [
            'method',
            'assignment operator',
            'variable',
            'string'
        ],
        correct: 'variable'
    },
    {
        question: 'How would you show the message \'hello world\' in an alert box?',
        answers: [
            'alert = \'hello world\'',
            'alert.text\(\'hello world\'\)',
            'alert(\'hello world\')',
            'show.alert(\'hello world\')'
        ],
        correct: 'alert(\'hello world\')'
    },
    {
        question: 'What method do you use to react to a user clicking on an element?',
        answers: [
            'addEventListener()',
            '\'click\'',
            'click()',
            '\'addEventListener\''
        ],
        correct: 'addEventListener()'
    },
    {
        question: 'Which of the following can be stored in variables?',
        answers: [
            'strings, numbers, booleans',
            'arrays, objects',
            'all of the above',
            'none of the above'
        ],
        correct: 'all of the above'
    },
    {
        question: 'Which operator is not valid when comparing two variables?',
        answers: [
            '\!\=',
            '\=\=',
            '\=',
            '\>\='
        ],
        correct: '\='
    },
    {
        question: 'What is a good, noninvasive method to use to check that your code is working at various points?',
        answers: [
            'console.log()',
            'alert()',
            'prompt()',
            'isThisWorking()'
        ],
        correct: 'console.log()'
    },
    {
        question: 'the answer is a',
        answers: [
            'a',
            'b',
            'c',
            '4'
        ],
        correct: 'a'
    },
    {
        question: 'the answer is 1',
        answers: [
            '1',
            '2',
            '3',
            'd'
        ],
        correct: '1'
    },
    {
        question: 'the answer is soon',
        answers: [
            'soon',
            'early',
            'late',
            'now'
        ],
        correct: 'soon'
    },
    {
        question: '1',
        answers: ['1', '2', '3', '4'],
        correct: '1'
    },
    {
        question: '2',
        answers: ['1', '2', '3', '4'],
        correct: '2'
    },
    {
        question: '3',
        answers: ['1', '2', '3', '4'],
        correct: '3'
    },
    {
        question: '4',
        answers: ['1', '2', '3', '4'],
        correct: '4'
    },
    {
        question: 'a',
        answers: ['a', 'b', 'c', 'd'],
        correct: 'a'
    },
    {
        question: 'b',
        answers: ['a', 'b', 'c', 'd'],
        correct: 'b'
    },
    {
        question: 'c',
        answers: ['a', 'b', 'c', 'd'],
        correct: 'c'
    }
];

let minutesLeft = document.getElementById('minDisplay');
let secondsLeft = document.getElementById('secDisplay');
let timerDisplay = document.getElementById('showHide');
let displayShowing = true;

// total time allotted for quiz
const totalTime = 180;
let timeElapsed = 0;
let interval;

let questionNumber = 0;
let score = 0;

let startButton = document.getElementById('startQuiz');
let scoreButton = document.getElementById('scores');

let scoreNames = [];
let scoreNums = [];

// for each card, generate a data attribute called data-answer and set it equal to info[i][2]
// then can check answer picked against correct answer

initialize();

// start quiz
startButton.addEventListener('click', function () {
    initialize();
    document.getElementById('card').removeChild(startButton);
    document.getElementById('card').removeChild(scoreButton);
    startTimer();
    renderTime();
    renderScore();
    generateContent();
});

scoreButton.addEventListener('click', function () {
    if (localStorage.getItem('names')) {
        initialize();
        // document.getElementById('card').removeChild(scoreButton);
        let scoreNames = JSON.parse(localStorage.getItem('names'));
        let scoreNums = JSON.parse(localStorage.getItem('nums'));
        if (scoreNames != null) {
            scoreNames = scoreNames;
            scoreNums = scoreNums;
        }
        let scoreList = document.createElement('ul');
        scoreList.setAttribute('class','list-group-flush');
        document.getElementById('card').appendChild(scoreList);
        for (let r = 0; r < scoreNames.length; r++) {
            let currentScore = document.createElement('li');
            currentScore.setAttribute('class', 'list-group-item');
            currentScore.textContent = 'Name: ' + scoreNames[r] + " Score: " + scoreNums[r];
            scoreList.appendChild(currentScore);
        }
    } else {
        let noScores = document.createElement('p');
        noScores.textContent = 'no scores recorded yet';
        document.getElementById('card').appendChild(noScores);
    }
    document.getElementById('card').removeChild(scoreButton);
});

// change timer text opacity to reveal or hide it
timerDisplay.addEventListener('click', function () {
    // if the text is showing....
    if (!displayShowing) {
        // change text color to match background, change text of button to say 'show'
        minutesLeft.style.opacity = 1;
        secondsLeft.style.opacity = 1;
        timerDisplay.textContent = 'hide time';
        displayShowing = true;
    } else {
        minutesLeft.style.opacity = 0;
        secondsLeft.style.opacity = 0;
        timerDisplay.textContent = 'show time';
        displayShowing = false;
    }

});

// add event listener; if correct, add to score, clear div and run generateContent()
// if incorrect, adjust score and time
document.getElementById('card').addEventListener('click', function (event) {
    let whichTry = 1;
    if (event.target.tagName === 'LI' && timeElapsed <= totalTime) {
        if (event.target.textContent === event.currentTarget.getAttribute('data-correct')) {
            if (info.length <= 0) {
                renderScore();
                alert('finished\!');
                quizEnd();
            } else {
                if (whichTry === 1) {
                    score += 4;
                } else if (whichTry === 2) {
                    score += 3;
                } else if (whichTry === 3) {
                    score += 2;
                } else {
                    score += 1;
                }
                renderScore();
                clearContent();
                generateContent();
            }
        } else {
            // lose 5 seconds 
            // event.target.style.textDecoration = 'line-through';
            event.target.style.backgroundColor = 'red';
            timeElapsed += 5;
            whichTry++;
        }
    }
});

function initialize() {
    clearContent();
    document.getElementById('card').appendChild(startButton);
    document.getElementById('card').appendChild(scoreButton);
    info = [
        {
            question: 'Inside which HTML element do we put the JavaScript?',
            answers: [
                '\<javascript\>',
                '\<js\>',
                '\<script\>',
                '\<scripting\>'
            ],
            correct: '\<script\>'
        },
        {
            question: 'Where is the correct place to insert the JavaScript?',
            answers: [
                'In the \<head\> section',
                'In the \<body\> section',
                'Both \<head\> and \<body\> section are correct',
                'Both \<head\> and \<body\> are correct, but best practice is at the end of the \<body\>'
            ],
            correct: 'Both \<head\> and \<body\> are correct, but best practice is at the end of the \<body\>'
        },
        {
            question: 'What is the best syntax for referring to an external script called xxx.js?',
            answers: [
                '\<script src=\'\.\/xxx.js\'\>',
                '\<script name=\'xxx.js\'\>',
                '\<script href=\'xxx.js\'\>',
                '\<script src=\'xxx.js\'\>'
            ],
            correct: '\<script src=\'\.\/xxx.js\'\>'
        },
        {
            question: 'An external JavaScript must contain the \<script\> tag',
            answers: [
                'true',
                'false'
            ],
            correct: 'false'
        },
        {
            question: 'How do you create a function titled \'myFunction\'\?',
            answers: [
                'function\:myFunction()',
                'function\=myFunction()',
                'function myFunction()',
                'function\.myFunction()'
            ],
            correct: 'function myFunction()'
        },
        {
            question: 'How do you call a function called \'myFunction\'\?',
            answers: [
                'call myFunction()',
                'myFunction()',
                'call\.myFunction',
                'function myFunction()'
            ],
            correct: 'myFunction()',
        },
        {
            question: 'How do you write a conditional statement for executing some statements only if a variable \'i\' is equal to 5\?',
            answers: [
                'if i\=\=5 then',
                'if \(i\=5\)',
                'if \(i\=\=5\)',
                'if i\=5'
            ],
            correct: 'if \(i\=\=5\)'
        },
        {
            question: 'How do you add a comment in a JavaScript?',
            answers: [
                '\<\!\-\-comment\-\-\>',
                '\*\*comment',
                '\/\/ comment',
                '\(\(comment\)\)'
            ],
            correct: '\/\/ comment'
        },
        {
            question: 'What is a correct way to declare an array called \'myArray\' containing the elements \'red\'\, \'yellow\'\, \'blue\'?',
            answers: [
                'let myArray = \[\'red\'\,\'yellow\'\,\'blue\'\]',
                'array myArray = \'red\'\,\'yellow\'\,\'blue\'',
                'let myArray = array\(red\, yellow\, blue\)',
                'myArray = \[\'red\'\,\'yellow\'\,\'blue\'\]'
            ],
            correct: 'let myArray = \[\'red\'\,\'yellow\'\,\'blue\'\]'
        },
        {
            question: 'A named element in JavaScript that is used to store and retrieve data from is a\:',
            answers: [
                'method',
                'assignment operator',
                'variable',
                'string'
            ],
            correct: 'variable'
        },
        {
            question: 'How would you show the message \'hello world\' in an alert box?',
            answers: [
                'alert = \'hello world\'',
                'alert.text\(\'hello world\'\)',
                'alert(\'hello world\')',
                'show.alert(\'hello world\')'
            ],
            correct: 'alert(\'hello world\')'
        },
        {
            question: 'What method do you use to react to a user clicking on an element?',
            answers: [
                'addEventListener()',
                '\'click\'',
                'click()',
                '\'addEventListener\''
            ],
            correct: 'addEventListener()'
        },
        {
            question: 'Which of the following can be stored in variables?',
            answers: [
                'strings, numbers, booleans',
                'arrays, objects',
                'all of the above',
                'none of the above'
            ],
            correct: 'all of the above'
        },
        {
            question: 'Which operator is not valid when comparing two variables?',
            answers: [
                '\!\=',
                '\=\=',
                '\=',
                '\>\='
            ],
            correct: '\='
        },
        {
            question: 'What is a good, noninvasive method to use to check that your code is working at various points?',
            answers: [
                'console.log()',
                'alert()',
                'prompt()',
                'isThisWorking()'
            ],
            correct: 'console.log()'
        },
        {
            question: 'the answer is a',
            answers: [
                'a',
                'b',
                'c',
                '4'
            ],
            correct: 'a'
        },
        {
            question: 'the answer is 1',
            answers: [
                '1',
                '2',
                '3',
                'd'
            ],
            correct: '1'
        },
        {
            question: 'the answer is soon',
            answers: [
                'soon',
                'early',
                'late',
                'now'
            ],
            correct: 'soon'
        },
        {
            question: '1',
            answers: ['1', '2', '3', '4'],
            correct: '1'
        },
        {
            question: '2',
            answers: ['1', '2', '3', '4'],
            correct: '2'
        },
        {
            question: '3',
            answers: ['1', '2', '3', '4'],
            correct: '3'
        },
        {
            question: '4',
            answers: ['1', '2', '3', '4'],
            correct: '4'
        },
        {
            question: 'a',
            answers: ['a', 'b', 'c', 'd'],
            correct: 'a'
        },
        {
            question: 'b',
            answers: ['a', 'b', 'c', 'd'],
            correct: 'b'
        },
        {
            question: 'c',
            answers: ['a', 'b', 'c', 'd'],
            correct: 'c'
        }
    ];
    timeElapsed = 0;
    displayShowing = true;
    score = 0;
    questionNumber = 0;
    renderTime();
    document.getElementById
    clearInterval(interval);
};

function formatMinutes() {
    let secondsLeft = totalTime - timeElapsed;
    let minutesLeft = Math.floor(secondsLeft / 60);
    return minutesLeft;
};

function formatSeconds() {
    let secondsLeft = (totalTime - timeElapsed) % 60;

    let formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
};

function renderTime() {
    minutesLeft.textContent = formatMinutes();
    secondsLeft.textContent = formatSeconds();
    if (timeElapsed >= totalTime) {
        alert('time is up\!');
        quizEnd();
    }
};

function renderScore() {
    document.querySelector('.score').textContent = 'Score: ' + score;
};

function startTimer() {
    interval = setInterval(function () {
        timeElapsed++;
        renderTime();
    }, 1000);
};

function quizEnd() {
    // minutesLeft.textContent = '00';
    // secondsLeft.textContent = '00';
    alert("Your final score was: " + score);
    let userName = prompt('Enter name to record score: ');
    scoreNames.push(userName);
    scoreNums.push(score);
    localStorage.setItem('names', JSON.stringify(scoreNames));
    localStorage.setItem('nums', JSON.stringify(scoreNums));
    initialize();
};

function generateContent() {
    let randomIndex = Math.floor(Math.random() * info.length);

    // make card with question and answers
    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    // put correct answer in data aspect of container div
    document.getElementById('card').setAttribute('data-correct', info[randomIndex].correct);
    document.getElementById('card').appendChild(cardBody);

    // display question number
    questionNumber++;
    let cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = 'Question ' + questionNumber + ' of 25';
    cardBody.appendChild(cardTitle);

    // add question
    let cardQuestion = document.createElement('p');
    cardQuestion.setAttribute('class', 'card-text');
    cardQuestion.textContent = info[randomIndex].question;
    cardBody.appendChild(cardQuestion);

    // add list to display answers
    let answers = document.createElement('ul');
    answers.setAttribute('class', 'answers');
    // answers.setAttribute('id', info[randomIndex].correct);
    cardBody.appendChild(answers);

    // shuffle answers
    for (let j = info[randomIndex].answers.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * j);
        const temp = info[randomIndex].answers[j];
        info[randomIndex].answers[j] = info[randomIndex].answers[k];
        info[randomIndex].answers[k] = temp;
    };

    // add answers to card
    for (let m = 0; m < info[randomIndex].answers.length; m++) {
        let option = document.createElement('li');
        option.textContent = info[randomIndex].answers[m];
        option.setAttribute('class', 'list-group-item');
        answers.appendChild(option);
    };
    // remove question from array
    info.splice(randomIndex, 1);
};

function clearContent() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
    while (document.getElementById('card').firstChild) {
        document.getElementById('card').removeChild(document.getElementById('card').firstChild);
    }
};