export function SoundControls({
    forestCard,
    forestAudio,
    rainCard,
    rainAudio,
    coffeeShopCard,
    coffeeShopAudio,
    firePlaceCard,
    firePlaceAudio,
  }) {
    function playPause(audio) {
      if (audio.paused) audio.play();
      else audio.pause();
    }
  
    function selectingSound(button) {
      button.classList.toggle("selected");
    }
  
    function forestSound() {
      selectingSound(forestCard);
      playPause(forestAudio);
    }
  
    function rainSound() {
      selectingSound(rainCard);
      playPause(rainAudio);
    }
  
    function coffeeShopSound() {
      selectingSound(coffeeShopCard);
      playPause(coffeeShopAudio);
    }
  
    function firePlaceSound() {
      selectingSound(firePlaceCard);
      playPause(forestAudio);
    }
  
    function firePlaceSound() {
      selectingSound(firePlaceCard);
      playPause(firePlaceAudio);
    }
  
    return {
      forestSound,
      rainSound,
      coffeeShopSound,
      firePlaceSound,
    };
  }