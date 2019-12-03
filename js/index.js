const buttons = document.querySelectorAll('[data-time]'),
        form = document.forms['customForm'],
        inputMinutes = form.elements['minutes'];

const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound;

    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);

        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound);
        }
    }

    function start(seconds) {
        if (!timerDisplay || !endTime) return console.log('Please init module first.');
        if (!seconds || typeof seconds !== 'number') return console.log('Please provide seconds.');

        clearInterval(countdown);

        if (alarmSound) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }

        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countdown);
                playSound();
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    function stop () {}

    function playSound() {
        alarmSound.play();
    }

    return {
        init, start, stop
    }

})();

// init timer
timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/bell.mp3'
})

