export function Sounds() {
  const forestAudio = new Audio("audio/Floresta.wav");
  const rainAudio = new Audio("audio/Chuva.wav");
  const coffeeShopAudio = new Audio("audio/Cafeteria.wav");
  const firePlaceAudio = new Audio("audio/Lareira.wav");
  const buttonPressAudio = new Audio
  

  

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeShopAudio.loop = true;
  firePlaceAudio.loop = true;

  forestAudio.volume = 0.5;
  rainAudio.volume = 0.5;
  coffeeShopAudio.volume = 0.5;
  firePlaceAudio.volume = 0.5;

  return {
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    firePlaceAudio,
    buttonPressAudio,
  };
}