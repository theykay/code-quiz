const info = [
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

// total time allotted for quiz. Currently 5 minutes
let totalTime = 300;
let timeLeft = totalTime;
let timeElapsed = 0;
let interval;

let startButton = document.createElement('button');
startButton.innerText = 'begin quiz';

// for each card, generate a data attribute called data-answer and set it equal to info[i][2]
// then can check answer picked against correct answer

initialize();

startButton.addEventListener('click', beginQuiz());

// change timer text color to reveal or hide it
timerDisplay.addEventListener('click', function () {
    // if the text is showing....
    if (displayShowing) {
        // change text color to match background, change text of button to say 'show'
        minutesLeft.style.opacity = 0;
        secondsLeft.style.opacity = 0;
        timerDisplay.textContent = 'show time';
        displayShowing = false;
    } else {
        minutesLeft.style.opacity = 1;
        secondsLeft.style.opacity = 1;
        timerDisplay.textContent = 'hide time';
        displayShowing = true;
    }
});

function initialize() {
    totalTime = 300;
    timeLeft = totalTime;
    timeElapsed = 0;
    displayShowing = true;
    document.getElementById('card').appendChild(startButton);
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
};

function startTimer() {
    interval = setInterval(function() {
        timeElapsed++;
        renderTime();
    }, 1000);
};

function beginQuiz() {
    // start timer, start generating questions
    startTimer();

};



