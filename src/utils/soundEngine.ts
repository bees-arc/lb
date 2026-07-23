// Single MP3 click sound for all UI interactions.
// Audio is pre-loaded once and cloned on each call so rapid clicks never queue.

let _audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement {
  if (!_audio) {
    _audio = new Audio("/sounds/click.mp3");
    _audio.preload = "auto";
    _audio.volume = 0.6;
  }
  return _audio;
}

export function playTactileSound(_type: "wood" | "fabric" | "light") {
  try {
    const clone = getAudio().cloneNode() as HTMLAudioElement;
    clone.volume = 0.6;
    clone.play().catch(() => {
      // Browser autoplay policy — silently ignore before first user gesture
    });
  } catch (e) {
    console.warn("Sound playback error:", e);
  }
}
