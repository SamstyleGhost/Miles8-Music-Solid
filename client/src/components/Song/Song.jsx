import { extras } from "../../assets/icons";

const Song = (props) => {
  return (
    <div class="flex gap-4 p-2 items-center hover:bg-black/25 hover:cursor-pointer rounded-md">
      <div class="w-8 text-right font-light text-text/50">{props.id}</div>
      <div class="w-full flex items-center">
        <div class="flex gap-2 w-5/12">
          <div class="w-10 h-10">
            <img src={props.srcImage} alt={props.songTitle} class="object-cover w-full h-full" />
          </div>
          <div class="flex flex-col justify-center">
            <p class="truncate">{props.songTitle}</p>
            <p class="text-sm text-text/80 truncate">{props.songArtists}</p>
          </div>
        </div>
        <div class="w-5/12 truncate">{props.songAlbum}</div>
        <div class="w-1/12">{props.songDuration}</div>
        <div class="w-1/12">
          <img src={extras} class="object-cover h-8" />
        </div>
      </div>
    </div>
  )
};

export default Song;