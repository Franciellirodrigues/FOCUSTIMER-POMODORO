export function Controls({
    playButton,
    pauseButton,
    buttonPressAudio,
    lightModeButton,
    darkModeButton,
    body,
  }) {
    function lightMode() {
      lightModeButton.classList.add("hide");
      darkModeButton.classList.remove("hide");
      body.classList.toggle("darkTheme");
      buttonPressAudio.play();
    }
  
    function darkMode() {
      darkModeButton.classList.add("hide");
      lightModeButton.classList.remove("hide");
      body.classList.toggle("darkTheme");
      buttonPressAudio.play();
    }
  
    function reset() {
      playButton.classList.remove("hide");
      pauseButton.classList.add("hide");
    }
  
    function play() {
      playButton.classList.add("hide");
      pauseButton.classList.remove("hide");
      buttonPressAudio.play();
    }
  
    function pause() {
      playButton.classList.remove("hide");
      pauseButton.classList.add("hide");
      buttonPressAudio.play();
    }
  
    function stop() {
      reset();
      buttonPressAudio.play();
    }
  
    return {
      reset,
      play,
      pause,
      stop,
      lightMode,
      darkMode,
    };
  }