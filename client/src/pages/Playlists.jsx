import { PlaylistCard } from "../components";

import { happy_now, starlight, safe_and_sound, way_down_we_go } from "./../assets/placeholders";

const Playlists = () => {
  return (
    <main>
      <h2 class="text-5xl font-bold">Playlists</h2>
      <div class="flex gap-8 py-4">
        <PlaylistCard playlistName='My Liked Songs' srcImage={happy_now} />
        <PlaylistCard playlistName='EDM' srcImage={starlight} />
        <PlaylistCard playlistName='Pop' srcImage={safe_and_sound} />
        <PlaylistCard playlistName='Rock Music' srcImage={way_down_we_go} />
      </div>
    </main>
  )
};

export default Playlists;