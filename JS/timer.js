const clock = $('#clock');

const minMinusBttn = $('#min-minus');
const minPlusBttn = $('#min-plus');
const secMinusBttn = $('#sec-minus');
const secPlusBttn = $('#sec-plus');

const inputField = $('#time-input');
const sendBttn = $('#send');

const startBttn = $('#start');
const pauseBttn = $('#pause');
const resettBttn = $('#reset');

const regex = '[0-5][0-9][:,.,\,][0-5][0-9]';


function Timer() {
    this.minutes = 0;
    this.seconds = 0;

    // Sets clock's state.
    this.setTimer = function() {
        this.clockString = `${pad(this.minutes, 2)}:${pad(this.seconds, 2)}`
        clock.text(this.clockString);
    }
}

function addMin() {
    if (timer.minutes < 59) {
        timer.minutes++;
        timer.setTimer();
    }
}

function subMin() {
    if (timer.minutes > 0) {
        timer.minutes--;
        timer.setTimer();
    }
}

function addSec() {
    if (timer.seconds < 59) {
        timer.seconds++;
        timer.setTimer();
    }
}

function subSec() {
    if (timer.seconds > 0) {
        timer.seconds--;
        timer.setTimer();
    }
}


// Decreases the counter every second.
function countdown() {
    timer.timeout = setTimeout(function() {
        if (timer.minutes == 0 && timer.seconds == 0) {
            clock.text('stop')
            return
        }
        if (timer.seconds > 0) {
            timer.seconds--;
        } else {
            timer.seconds = 59;
            timer.minutes--;
        }
        timer.setTimer();
        countdown();
    }, 1000);
}

function pause() {
    clearTimeout(timer.timeout);
}

function reset() {
    pause();
    timer.minutes = 0;
    timer.seconds = 0;
    timer.setTimer();
}

// Formats a number with leading zeros.
function pad(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

function getInput() {
    console.log(inputField.value());
}


const timer = new Timer();
timer.setTimer();

minMinusBttn.click(subMin);
minPlusBttn.click(addMin);
secMinusBttn.click(subSec);
secPlusBttn.click(addSec);

startBttn.click(countdown);
resettBttn.click(reset);
pauseBttn.click(pause);

sendBttn.click(getInput);
