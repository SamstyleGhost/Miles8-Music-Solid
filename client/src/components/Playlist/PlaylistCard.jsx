const PlaylistCard = (props) => {
  return (
    <a href="playlist/1">
      <div class="flex flex-col relative w-60 h-60 shadow-2xl drop-shadow-2xl rounded-md overflow-hidden hover:-translate-y-2 border hover:border-white border-transparent hover:shadow-white/10 hover:shadow-2xl duration-500">
        <img class="absolute top-0 left-0 w-full h-full opacity-35" src={props.srcImage} alt={props.title} />
        <div class="w-full h-full flex justify-center items-center p-2 z-10">
          <h6 class="text-xl truncate">{props.playlistName}</h6>
        </div>
      </div>
    </a>
  )
}

export default PlaylistCard;