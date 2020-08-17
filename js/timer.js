const buttons = document.querySelectorAll("[data-time]"),
  form = document.forms["customForm"],
  inputMinutes = form.elements["minutes"];

const timer = (function () {
  let countdown, timerDisplay, endTime, alarmSound;

  return {
    init,
    start,
    stop,
  };
})();
