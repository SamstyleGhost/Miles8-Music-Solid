import { extras } from "../../assets/icons";

import { setCurrentArtist, setCurrentSong, setCurrentTitle } from "../../signals";

const Song = (props) => {
  return (
    <div 
      class="flex gap-4 p-2 items-center hover:bg-black/25 hover:cursor-pointer rounded-md" 
      onClick={() => {
        setCurrentSong(props.uuid)
        setCurrentTitle(props.songTitle)
        setCurrentArtist(props.songArtists)
      }}
      >
      <div class="w-8 text-right font-light text-text/50 text-xs">{props.id}</div>
      <div class="w-full flex items-center">
        <div class="flex items-center gap-2 w-5/12">
          <div class="w-9 h-9">
            <img src={`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/images/${props.uuid}.png`} alt={props.songTitle} class="object-cover w-full h-full rounded-sm" />
          </div>
          <div class="flex flex-col gap-0.5 justify-center">
            <p class="truncate text-sm">{props.songTitle}</p>
            <p class="text-xs text-text/80 truncate">{props.songArtists}</p>
          </div>
        </div>
        <div class="w-5/12 truncate text-sm">{props.songAlbum}</div>
        <div class="w-1/12 text-sm">{props.songDuration}</div>
        <div class="w-1/12">
          <img src={extras} class="object-cover h-6" />
        </div>
      </div>
    </div>
  )
};

export default Song;