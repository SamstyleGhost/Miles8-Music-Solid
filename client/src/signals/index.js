import { createSignal } from "solid-js";

const [currentSong, setCurrentSong] = createSignal('035a4be9-e9fe-42b2-ae73-475efb58f3d0');

export {
  currentSong,
  setCurrentSong
}