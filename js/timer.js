const buttons = document.querySelectorAll("[data-time]"),
  form = document.forms["customForm"],
  inputMinutes = form.elements["minutes"];

const timer = (function () {
  let countdown, timerDisplay, endTime, alarmSound;

  function init(settings) {}

  function start(seconds) {}

  function displayTimeLeft(seconds) {}

  function displayEndTime(timestamp) {}

  return {
    init,
    start,
    stop,
  };
})();
