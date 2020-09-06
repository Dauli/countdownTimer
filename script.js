// select all DOM ids
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');

// new targeted year
const newYears = 'First January 2021';

// function to calculate countdown
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // populates in pages with calculated values
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

// show 0 in the from when time is less then 0
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

// set interval that call function every seconds
setInterval(countdown, 1000)
