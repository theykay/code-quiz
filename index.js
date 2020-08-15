let info = [
    // array of arrays
    // each array contains: question, possible answers (another array), correct answer
    ['question 1', ['a', 'b', 'c', 'd'], 'a'],
    ['question 2', ['a', 'b', 'c', 'd'], 'b'],
    ['question 3', ['a', 'b', 'c', 'd'], 'c'],
    ['question 4', ['a', 'b', 'c', 'd'], 'd'],
    ['question 5', ['a', 'b', 'c', 'd'], 'a'],
    ['question 6', ['a', 'b', 'c', 'd'], 'b'],
    ['question 7', ['a', 'b', 'c', 'd'], 'c'],
    ['question 8', ['a', 'b', 'c', 'd'], 'd'],
    ['question 9', ['a', 'b', 'c', 'd'], 'a'],
    ['question 10', ['a', 'b', 'c', 'd'], 'b'],
    ['question 11', ['a', 'b', 'c', 'd'], 'c'],
    ['question 12', ['a', 'b', 'c', 'd'], 'd'],
    ['question 13', ['a', 'b', 'c', 'd'], 'a'],
    ['question 14', ['a', 'b', 'c', 'd'], 'b'],
    ['question 15', ['a', 'b', 'c', 'd'], 'c'],
    ['question 16', ['a', 'b', 'c', 'd'], 'd'],
    ['question 17', ['a', 'b', 'c', 'd'], 'a'],
    ['question 18', ['a', 'b', 'c', 'd'], 'b'],
    ['question 19', ['a', 'b', 'c', 'd'], 'c'],
    ['question 20', ['a', 'b', 'c', 'd'], 'd'],
    ['question 21', ['a', 'b', 'c', 'd'], 'a'],
    ['question 22', ['a', 'b', 'c', 'd'], 'b'],
    ['question 23', ['a', 'b', 'c', 'd'], 'c'],
    ['question 24', ['a', 'b', 'c', 'd'], 'd'],
    ['question 25', ['a', 'b', 'c', 'd'], 'a']
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
        cardQuestion.textContent = info[randomIndex][0];
        cardBody.appendChild(cardQuestion);

        // add list to display answers
        let answers = document.createElement('ul');
        cardBody.appendChild(answers);

        // add choices for answer
        for (let j = 0; j < info[randomIndex][1].length; j++) {
            let option = document.createElement('li');
            option.textContent = info[randomIndex][1][j];
            answers.appendChild(option);
        };

        // add event listener to check answers when li element is clicked
        document.querySelector('li').addEventListener('click', function(event) {
            if (event.currentTarget.textContent === info[randomIndex][2]) {
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

