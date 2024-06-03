let secondsElapsed = 0; 
let interval = null;
const time = document.getElementById('time');

function setTime() {
    time.innerHTML = secondsElapsed.toFixed(2) + ' seconds';
}

function timer() {
    secondsElapsed += 0.01;
    setTime();
}

function Start() {
    if (interval === null) {
        interval = setInterval(timer, 10);
    }
}

function Stop() {
    clearInterval(interval);
    interval = null;
}

function Reset() {
    Stop();
    secondsElapsed = 0;
    setTime();
}
