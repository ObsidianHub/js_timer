const buttons = document.querySelectorAll("[data-time]"),
  form = document.forms["customForm"],
  inputMinutes = form.elements["minutes"];

const timer = (function () {
  return {
    init,
    start,
    stop,
  };
})();
