const buttons = document.querySelectorAll("[data-time]"),
  form = document.forms["customForm"],
  inputMinutes = form.elements["minutes"];

const timer = (function () {
  let countdown, timerDisplay, endTime, alarmSound;

  function init(settings) {
    timerDisplay = document.querySelector(settings.timeLeftSelector);
    endTime = document.querySelector(settings.timeEndSelector);

    if (settings.alarmSound) {
      alarmSound = new Audio(settings.alarmSound);
    }
  }

  function start(seconds) {
    if (!timerDisplay || !endTime)
      return console.log("Please init module first.");
    if (!seconds || typeof seconds !== "number")
      return console.log("Please provide seconds.");
  }

  function displayTimeLeft(seconds) {}

  function displayEndTime(timestamp) {}

  return {
    init,
    start,
    stop,
  };
})();

// init timer
timer.init({
  timeLeftSelector: ".display__time-left",
  timeEndSelector: ".display__end-time",
  alarmSound: "audio/bell.mp3",
});

// start timer by click
function startTimer(e) {
  const seconds = parseInt(this.dataset.time);
  timer.start(seconds);
}

buttons.forEach((btn) => btn.addEventListener("click", startTimer));
