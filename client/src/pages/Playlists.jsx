import { Playlist } from "../components";

const Playlists = () => {
  return (
    <main>
      <h2 class="text-5xl font-bold">Playlists</h2>
      <div class="flex flex-col gap-8 py-4">
        <Playlist playlistName='My Liked Songs' />
        <Playlist playlistName='EDM + Pop' />
        <Playlist playlistName='Rock Music' />
      </div>
    </main>
  )
};

export default Playlists;