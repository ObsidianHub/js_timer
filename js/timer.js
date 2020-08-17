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

  function start(seconds) {}

  function displayTimeLeft(seconds) {}

  function displayEndTime(timestamp) {}

  return {
    init,
    start,
    stop,
  };
})();
