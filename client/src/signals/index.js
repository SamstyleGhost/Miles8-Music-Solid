import { createSignal } from "solid-js";

const [currentSong, setCurrentSong] = createSignal('035a4be9-e9fe-42b2-ae73-475efb58f3d0');
const [currentTitle, setCurrentTitle] = createSignal('Aaoge Tum Kabhi');
const [currentArtist, setCurrentArtist] = createSignal('The Local Train');
const [currentUser, setCurrentUser] = createSignal('samstyleghost');
const [currentUserData,setCurrentUserData] = createSignal(null);

export {
  currentSong,
  setCurrentSong,
  currentTitle,
  setCurrentTitle,
  currentArtist,
  setCurrentArtist,
  currentUser,
  setCurrentUser,
  currentUserData,
  setCurrentUserData
}