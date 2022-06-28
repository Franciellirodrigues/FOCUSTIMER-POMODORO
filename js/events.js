import {
    lightModeButton,
    darkModeButton,
    playButton,
    pauseButton,
    stopButton,
    plus5Button,
    minus5Button,
    forestButton,
    rainButton,
    coffeeShopButton,
    firePlaceButton,
    volForest,
    volRain,
    volCoffeeShop,
    volFirePlace,
  } from "./elements.js";
  
  export function Events({ controls, timer, soundControls, sounds }) {
    lightModeButton.addEventListener("click", function () {
      controls.lightMode();
    });
  
    darkModeButton.addEventListener("click", function () {
      controls.darkMode();
    });
  
    playButton.addEventListener("click", function () {
      controls.play();
      timer.countdown();
    });
  
    pauseButton.addEventListener("click", function () {
      controls.pause();
      timer.hold();
    });
  
    stopButton.addEventListener("click", function () {
      controls.stop();
      timer.reset();
    });
  
    plus5Button.addEventListener("click", function () {
      timer.plus5Minutes();
      sounds.buttonPressAudio.play();
    });
  
    minus5Button.addEventListener("click", function () {
      timer.minus5Minutes();
      sounds.buttonPressAudio.play();
    });
  
    forestButton.addEventListener("click", function () {
      soundControls.forestSound();
    });
  
    rainButton.addEventListener("click", function () {
      soundControls.rainSound();
    });
  
    coffeeShopButton.addEventListener("click", function () {
      soundControls.coffeeShopSound();
    });
  
    firePlaceButton.addEventListener("click", function () {
      soundControls.firePlaceSound();
    });
  
    volForest.addEventListener("input", function () {
      sounds.forestAudio.volume = volForest.value;
    });
  
    volRain.addEventListener("input", function () {
      sounds.rainAudio.volume = volRain.value;
    });
  
    volCoffeeShop.addEventListener("input", function () {
      sounds.coffeeShopAudio.volume = volCoffeeShop.value;
    });
  
    volFirePlace.addEventListener("input", function () {
      sounds.firePlaceAudio.volume = volFirePlace.value;
    });
  }