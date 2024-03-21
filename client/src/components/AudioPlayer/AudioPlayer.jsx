import { happy_now } from "../Playlist/placeholders/playlists";

const AudioPlayer = () => {
  return (
    <div class="sticky bottom-2 left-0 flex justify-between sidebar-background rounded-md z-50">
      <div class="flex gap-4">
        <div class="p-4 rounded-md overflow-hidden">
          <img src={happy_now} alt="Song" width={80} height={80} />
        </div>
        <div class="flex flex-col justify-center gap-1">
          <h4 class="text-2xl">Happy Now</h4>
          <p>Kygo ft. Sandro Cavazza</p>
        </div>
      </div>
      <div class="">

      </div>
    </div>
  )
};

export default AudioPlayer;