// Homework 17

let timeout = 10;
let interval = null;
let isActive = false;
const timeContainer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

const formatTime = (timeItem) => {
    return String(timeItem).length < 2 ? `0${timeItem}` : timeItem;
};

const renderTimer = ( { hours, minutes, seconds } ) => {
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
timeContainer.innerText = timeString;
};

const getTimeLeft = ( secondsLeft ) => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft - hours * 3600) / 60 );
    const seconds = secondsLeft - hours * 3600 - minutes * 60;

    return {
        hours,
        minutes,
        seconds,
    };
};

const startTimer = () => {
    isActive = true;

    const time = getTimeLeft(timeout);

    renderTimer(time);

    return new Promise((resolve) => {
        interval = setInterval(() => {
            timeout--;
            if ( timeout <= 0 ) {
                isActive = false;

                clearInterval(interval);
                interval = null;
                resolve();
            }
            const time = getTimeLeft(timeout);
            renderTimer(time);
        }, 1000);
    })
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
    isActive = false;
    timeout = 10;
    const time = getTimeLeft(timeout);
    renderTimer(time);
};

const pauseTimer = () => {
    isActive = false;
    clearInterval(interval);
    interval = null;

};

startBtn.addEventListener("click", () => {
    if (isActive || !timeout) {
        return;
    }

    startTimer().then(() => {
        alert("Timer end!");
    });
});
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);