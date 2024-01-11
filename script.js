const newYear = '1 Jan 2024';
const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minsEL = document.getElementById("mins")
const secsEL = document.getElementById("seconds")
function countdown() {
    const newYearsDate = new Date(newYear);
    const currentdate = new Date();

    const totalSeconds = (newYearsDate - currentdate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(minutes);
    secsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//initial call 
countdown();

setInterval(countdown, 1000);