import { happy_now, starlight, safe_and_sound, way_down_we_go } from "./../../assets/placeholders";

const PlaylistCard = (props) => {
  return (
    <div class="flex flex-col relative w-60 h-60 shadow-2xl drop-shadow-2xl rounded-md overflow-hidden">
      <img class="absolute top-0 left-0 w-full h-full opacity-35" src={props.srcImage} alt={props.title} />
      <div class="w-full h-full flex flex-col justify-end p-2 z-10">
        <h6 class="text-xl truncate">{props.title}</h6>
        <p class="truncate">{props.artist}</p>
        <p class="truncate">{props.album}</p>
      </div>
    </div>
  )
}

const Playlist = (props) => {
  return (
    <div class="flex flex-col gap-2">
      <h4 class="text-2xl italic underline">{props.playlistName}</h4>
      <div class="flex gap-8 w-full flex-wrap">
        <PlaylistCard srcImage={happy_now} title='Happy Now' artist='Kygo ft.Sandro Cavazza' album='Happy Now' />
        <PlaylistCard srcImage={starlight} title='Starlight' artist='Martin Garrix, Dubvision, Shaun Farrugia' album='Starlight' />
        <PlaylistCard srcImage={safe_and_sound} title='Safe and Sound' artist='Capital Cities' album='Safe and Sound' />
        <PlaylistCard srcImage={way_down_we_go} title='Way Down We Go' artist='Kaleo' album='Way Down We Go' />
      </div>
    </div>
  )
};

export default Playlist;