import { Song } from "../components";
import { happy_now, safe_and_sound, starlight, way_down_we_go } from "../assets/placeholders";

const Songs = () => {
  return (
    <main>
      <h2 class="text-5xl font-bold">Songs</h2>
      <div class="flex flex-col gap-1 w-full mt-5">
        <Song id="1" srcImage={happy_now} songTitle="Happy Now" songArtists="Kygo ft.Sandro Cavazza" songAlbum="Kygo - Happy Now" songDuration="4:17" />
        <Song id="2" srcImage={safe_and_sound} songTitle="Safe and Sound" songArtists="Capital Cities" songAlbum="Safe and Sound" songDuration="5:29" />
        <Song id="3" srcImage={starlight} songTitle="Martin Garrix - Starlight" songArtists="Martin Garrix, Dubvision & Shaun Farrugia" songAlbum="Starlight - Stmp Records" songDuration="3:02" />
        <Song id="4" srcImage={way_down_we_go} songTitle="Way Down We Go" songArtists="Kaleo" songAlbum="Way Down We Go - Kaleo Records" songDuration="3:23" />
        <Song id="5" srcImage={happy_now} songTitle="Happy Now" songArtists="Kygo ft.Sandro Cavazza" songAlbum="Kygo - Happy Now" songDuration="4:17" />
        <Song id="6" srcImage={safe_and_sound} songTitle="Safe and Sound" songArtists="Capital Cities" songAlbum="Safe and Sound" songDuration="5:29" />
        <Song id="7" srcImage={starlight} songTitle="Martin Garrix - Starlight" songArtists="Martin Garrix, Dubvision & Shaun Farrugia" songAlbum="Starlight - Stmp Records" songDuration="3:02" />
        <Song id="8" srcImage={way_down_we_go} songTitle="Way Down We Go" songArtists="Kaleo" songAlbum="Way Down We Go - Kaleo Records" songDuration="3:23" />
        <Song id="9" srcImage={happy_now} songTitle="Happy Now" songArtists="Kygo ft.Sandro Cavazza" songAlbum="Kygo - Happy Now" songDuration="4:17" />
        <Song id="10" srcImage={safe_and_sound} songTitle="Safe and Sound" songArtists="Capital Cities" songAlbum="Safe and Sound" songDuration="5:29" />
        <Song id="11" srcImage={starlight} songTitle="Martin Garrix - Starlight" songArtists="Martin Garrix, Dubvision & Shaun Farrugia" songAlbum="Starlight - Stmp Records" songDuration="3:02" />
        <Song id="12" srcImage={way_down_we_go} songTitle="Way Down We Go" songArtists="Kaleo" songAlbum="Way Down We Go - Kaleo Records" songDuration="3:23" />
      </div>
    </main>
  )
};

export default Songs;