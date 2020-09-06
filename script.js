// select all DOM ids
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// function to calculate countdown
function countdown() {
    // *** new targeted year manually ***
    // const newYears = '1 Jannuary 2021';
    // const newYearsDate = new Date(newYears);
    // const currentDate = new Date();

    // get new year dynamically
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const newYearsDate = new Date( (currentYear + 1), 0, 1 );

    
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // populates in pages with calculated values
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

// show 0 in the front when time is less then 0
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

// set interval that call function every seconds
setInterval(countdown, 1000)
