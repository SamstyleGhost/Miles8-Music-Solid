import { createEffect, createSignal, Show } from "solid-js";
import { createAudio } from "@solid-primitives/audio";

import { play, pause, next, previous } from "../../assets/icons";

import { currentArtist, currentSong, currentTitle } from "../../signals";

const AudioPlayer = () => {

  const [playing, setPlaying] = createSignal(false);
  const [volume, setVolume] = createSignal(true);

  const [audio, controls] = createAudio(`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/songs/premium/${currentSong()}.mp3`, playing, volume);

  const [song, setSong] = createSignal(audio);
  const [control, setControl] = createSignal(controls);

  createEffect(() => {
    const [audio, controls] = createAudio(`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/songs/premium/${currentSong()}.mp3`, playing, volume);
    setSong(audio);
    setControl(controls);
  })

  const formatTime = (minute) => {
    const min_time = Math.floor(minute/60);
    const sec_time = Math.floor(minute%60);

    return <p class="text-sm">{min_time.toString().padStart(2,'0')}:{sec_time.toString().padStart(2,'0')}</p>
  };


  return (
    <div id="audio_player" class="sticky bottom-0 left-0 z-50 bg-background py-2">
      <div class="flex sidebar-background rounded-md w-full">
        <div class="flex gap-4 w-1/2">
          <div class="p-4 rounded-lg overflow-hidden">
            <img src={`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/images/${currentSong()}.png`} alt="Song" width={60} height={60} />
          </div>
          <div class="flex flex-col justify-center gap-1">
            <h4 class="text-xl">{currentTitle()}</h4>
            <p class='text-sm'>{currentArtist()}</p>
          </div>
        </div>
        <div class="flex flex-col w-full p-4">
          <div class="flex justify-center items-center gap-4 w-full h-full">
            <div class="size-8">
              <img src={previous} class="w-full h-full object-cover" />
            </div>
            <div class="size-8">
              <Show when={song().state === 'playing'} fallback={<img src={play} class="w-full h-full object-cover fill-current cursor-pointer p-0.5" onclick={() => control().play()}/>}>
                <img src={pause} class="w-full h-full object-cover fill-current cursor-pointer" onclick={() => control().pause()} />
              </Show>
            </div>
            <div class="size-8">
              <img src={next} class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="flex justify-center items-center gap-4 w-full h-full">
            <div>
              {formatTime(song().currentTime)}
            </div>
            <input
              type='range'
              onChange={(event) => {control().seek(event.target.value)}}
              min={0}
              max={song().duration}
              step={1}
              value={song().currentTime}
              class='w-1/2 custom-slider'>
            </input>
            <div>
              {formatTime(song().duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AudioPlayer;