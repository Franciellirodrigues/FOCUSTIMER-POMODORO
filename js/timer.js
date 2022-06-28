export function Timer({
  minutesDisplay,
  secondsDisplay,
  kitchenTimer,
  controls,
}) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateMinutes() {
    minutes = Number(minutesDisplay.textContent);
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function reset() {
    hold();
    updateDisplay(minutes, 0);
  }

  function plus5Minutes() {
    updateDisplay(minutes + 5, 0);
    updateMinutes(minutes);
  }

  function minus5Minutes() {
    if (minutes == 0) {
      kitchenTimer.play();
      return;
    }

    updateDisplay(minutes - 5, 0);
    updateMinutes(minutes);
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);

      if (minutes == 0 && seconds == 0) {
        reset();
        controls.reset();
        kitchenTimer.play();
        return;
      }

      if (seconds == 0) {
        seconds = 60;
        --minutes;
      }

      --seconds;

      updateDisplay(minutes, seconds);

      countdown();
    }, 1000);
  }

  return {
    updateMinutes,
    updateDisplay,
    hold,
    reset,
    plus5Minutes,
    minus5Minutes,
    countdown,
  };
}