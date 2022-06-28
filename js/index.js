import {
  body,
  lightModeButton,
  darkModeButton,
  playButton,
  pauseButton,
  forestCard,
  rainCard,
  coffeeShopCard,
  firePlaceCard,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Controls } from "./controls.js";
import { SoundControls } from "./soundControls.js";
import { Events } from "./events.js";

const sounds = Sounds();

const controls = Controls({
  playButton,
  pauseButton,
  lightModeButton,
  darkModeButton,
  body,
  buttonPressAudio: sounds.buttonPressAudio,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  kitchenTimer: sounds.kitchenTimer,
});

const soundControls = SoundControls({
  forestCard,
  forestAudio: sounds.forestAudio,
  rainCard,
  rainAudio: sounds.rainAudio,
  coffeeShopCard,
  coffeeShopAudio: sounds.coffeeShopAudio,
  firePlaceCard,
  firePlaceAudio: sounds.firePlaceAudio,
});

Events({ controls, timer, sounds, soundControls });