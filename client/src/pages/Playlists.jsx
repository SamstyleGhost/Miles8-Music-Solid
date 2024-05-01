import { PlaylistCard } from "../components";
import { getUserData } from "../lib";

import { currentUserData } from "../signals";
import { createEffect, For } from "solid-js";

const Playlists = () => {

  createEffect(() => {
    getUserData();
  })

  return (
    <main>
      <h2 class="text-5xl font-bold">Playlists</h2>
      <div class="flex gap-8 py-4">
        <PlaylistCard playlistName='My Liked Songs' id='liked' />
        <For each={currentUserData()?.playlists}>
          {(playlist, index) => {
            <PlaylistCard playlistName={playlist.name} id={index} />
          }}
        </For>
        {/* <PlaylistCard playlistName='My Liked Songs' srcImage={happy_now} />
        <PlaylistCard playlistName='EDM' srcImage={starlight} />
        <PlaylistCard playlistName='Pop' srcImage={safe_and_sound} />
        <PlaylistCard playlistName='Rock Music' srcImage={way_down_we_go} /> */}
      </div>
    </main>
  )
};

export default Playlists;