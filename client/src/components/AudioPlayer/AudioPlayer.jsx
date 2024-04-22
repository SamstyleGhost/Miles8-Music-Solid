import { createEffect, createSignal, Show } from "solid-js";
import { createAudio } from "@solid-primitives/audio";

import { play, pause, next, previous } from "../../assets/icons";

import { currentSong } from "../../signals";

const AudioPlayer = () => {

  const [playing, setPlaying] = createSignal(false);
  const [volume, setVolume] = createSignal(true);
  const [song, setSong] = createSignal();
  const [control, setControl] = createSignal();
  
  const [audio, controls] = createAudio(`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/songs/premium/${currentSong()}.mp3`, playing, volume);

  const formatTime = (minute) => {
    const min_time = Math.floor(minute/60);
    const sec_time = Math.floor(minute%60);

    return <p class="text-sm">{min_time.toString().padStart(2,'0')}:{sec_time.toString().padStart(2,'0')}</p>
  };

  return (
    <div class="sticky bottom-0 left-0 z-50 bg-background py-2">
      <div class="flex sidebar-background rounded-md w-full">
        <div class="flex gap-4 w-1/2">
          <div class="p-4 rounded-lg overflow-hidden">
            <img src={`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/images/${currentSong()}.png`} alt="Song" width={60} height={60} />
          </div>
          <div class="flex flex-col justify-center gap-1">
            <h4 class="text-xl">Happy Now</h4>
            <p class='text-sm'>Kygo ft. Sandro Cavazza</p>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex justify-center items-center gap-4 w-full h-full">
            <div class="size-8">
              <img src={previous} class="w-full h-full object-cover" />
            </div>
            <div class="size-8">
              <Show when={audio.state === 'playing'} fallback={<img src={play} class="w-full h-full object-cover fill-current cursor-pointer" onclick={() => controls.play()}/>}>
                <img src={pause} class="w-full h-full object-cover fill-current cursor-pointer" onclick={() => controls.pause()} />
              </Show>
            </div>
            <div class="size-8">
              <img src={next} class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="flex justify-center items-center gap-4 w-full h-full">
            <div>
              {formatTime(audio.currentTime)}
            </div>
            <input
              type='range'
              onChange={(event) => {controls.seek(event.target.value)}}
              min={0}
              max={audio.duration}
              step={1}
              value={audio.currentTime}
              class='w-1/2 custom-slider'>
            </input>
            <div>
              {formatTime(audio.duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AudioPlayer;