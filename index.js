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
        question:'What is the best syntax for referring to an external script called xxx.js?',
        answers: [
            '\<script src=\'\.\/xxx.js\'\>',
            '\<script name=\'xxx.js\'\>',
            '\<script href=\'xxx.js\'\>',
            '\<script src=\'xxx.js\'\>'
        ],
        correct: '\<script src=\'\.\/xxx.js\'\>'
    },
    {
        question:'An external JavaScript must contain the \<script\> tag',
        answers: [
            'true',
            'false'
        ],
        correct: 'false'
    },
    {
        question:'How do you create a function titled \'myFunction\'\?',
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
        question:'How do you write a conditional statement for executing some statements only if a variable \'i\' is equal to 5\?',
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
        question:'A named element in JavaScript that is used to store and retrieve data from is a\:',
        answers: [
            'method',
            'assignment operator',
            'variable',
            'string'
        ],
        correct: 'variable'
    },
    {
        question:'How would you show the message \'hello world\' in an alert box?',
        answers: [
            'alert = \'hello world\'',
            'alert.text\(\'hello world\'\)',
            'alert(\'hello world\')',
            'show.alert(\'hello world\')'
        ],
        correct: 'alert(\'hello world\')'
    },
    {
        question:'What method do you use to react to a user clicking on an element?',
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
        question:'What is a good, noninvasive method to use to check that your code is working at various points?',
        answers: [
            'console.log()',
            'alert()',
            'prompt()',
            'isThisWorking()'
        ],
        correct: 'console.log()'
    },
    {
        question:'the answer is a',
        answers: [
            'a',
            'b',
            'c',
            '4'
        ],
        correct: 'a'
    },
    {
        question:'the answer is 1',
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
        question:'1',
        answers: ['1','2','3','4'],
        correct: '1'
    },
    {
        question: '2',
        answers: ['1','2','3','4'],
        correct: '2'
    },
    {
        question:'3',
        answers: ['1','2','3','4'],
        correct: '3'
    },
    {
        question: '4',
        answers: ['1','2','3','4'],
        correct: '4'
    },
    {
        question:'a',
        answers: ['a','b','c','d'],
        correct: 'a'
    },
    {
        question:'b',
        answers: ['a','b','c','d'],
        correct: 'b'
    },
    {
        question:'c',
        answers: ['a','b','c','d'],
        correct: 'c'
    }
];

let minutesLeft = document.getElementById('minDisplay');
let secondsLeft = document.getElementById('secDisplay');
let timerDisplay = document.getElementById('showHide');
let displayShowing = true;

// total time allotted for quiz
const totalTime = 15;
let timeElapsed = 0;
let interval;

let startButton = document.getElementById('startQuiz');

// for each card, generate a data attribute called data-answer and set it equal to info[i][2]
// then can check answer picked against correct answer

initialize();

startButton.addEventListener('click', function () {
    document.getElementById('card').removeChild(startButton);
    // start timer, start generating questions
    initialize();
    startTimer();
    renderTime();
    quizzing();
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

function initialize() {
    timeElapsed = 0;
    displayShowing = true;
    renderTime();
    clearInterval(interval);
};

function formatMinutes() {
    let secondsLeft = totalTime - timeElapsed;
    let minutesLeft = Math.floor(secondsLeft / 60);
    let formattedMinutes;

    if (minutesLeft < 10) {
        formattedMinutes = "0" + minutesLeft;
    } else {
        formattedMinutes = minutesLeft;
    }

    return formattedMinutes;
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
        quizEnd();
    }
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
    document.getElementById('card').appendChild(startButton);
    initialize();
};

function quizzing(event) {
    // repeat between ** until info array is empty
    // **
    // get random number based on length of info array
    // populate div with question at info[randomNumber][0] and answers (ul) from info[randomNumber][1]
    // click event listener for li elements: if content of li matches element at info[randomNumber][2], end this iteration of loop. Else if wrong, subtract X seconds from time
    // remove element at info[randomNumber]
    // **

    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    document.getElementById('card').appendChild(cardBody);

    let counter = 0;
    
    for (let i = 0; i < info.length;) {
        // display question number
        counter++;
        let cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.textContent = 'Question ' + counter + ' of 25';
        cardBody.appendChild(cardTitle);
       
        // get random index of questions array
        let randomIndex = Math.floor(Math.random()*info.length);

        // add question
        let cardQuestion = document.createElement('p');
        cardQuestion.setAttribute('class', 'card-text');
        cardQuestion.textContent = info[randomIndex].question;
        cardBody.appendChild(cardQuestion);

        // add list to display answers
        let answers = document.createElement('ul');
        answers.setAttribute('class', 'answers');
        cardBody.appendChild(answers);

        // add choices for answer
        for (let j = 0; j < info[randomIndex].answers.length; j++) {
            let option = document.createElement('li');
            option.textContent = info[randomIndex].answers[j];
            answers.appendChild(option);
        };

        // add event listener to check answers when li element is clicked
        document.querySelector('ul').addEventListener('click', function(event) {
            if (event.target.textContent === info[randomIndex].correct) {
                // card flash green, move on to next question
                
            } else {
                // card flash red
                // strike through 
                event.currentTarget.style.textDecoration = 'line-through';

            }
        });
        
        // at end of each loop, remove question from array
        info.splice(randomIndex, 1);
    }

};

