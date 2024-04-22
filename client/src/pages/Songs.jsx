import { Song } from "../components";
import { happy_now, safe_and_sound, starlight, way_down_we_go } from "../assets/placeholders";

const Songs = () => {
  return (
    <main>
      <h2 class="text-5xl font-bold">Songs</h2>
      <div class="flex flex-col gap-0.5 w-full mt-5">
        <Song id="1" uuid='e6c2e00c-986b-4f31-b3c3-6135bf0e1a72' songTitle="Happy Now" songArtists="Kygo ft.Sandro Cavazza" songAlbum="Kygo - Happy Now" songDuration="4:17" />
        <Song id="2" uuid='035a4be9-e9fe-42b2-ae73-475efb58f3d0' songTitle="Aaoge Tum Kabhi" songArtists="The Local Train" songAlbum="Aalas Ka Pedh" songDuration="5:29" />
        <Song id="3" uuid='71025ffd-367a-40bd-b538-f1de65e1ac97' songTitle="Daru Badnaam" songArtists="Kamal Kahlon, Param Singh & Pratik Studio" songAlbum="Daru Badnaam" songDuration="3:02" />
        <Song id="4" uuid='43482883-14ab-4dde-a67e-468776a92d8a' songTitle="Wake Me Up" songArtists="Avicii" songAlbum="True" songDuration="3:23" />
      </div>
    </main>
  )
};

export default Songs;