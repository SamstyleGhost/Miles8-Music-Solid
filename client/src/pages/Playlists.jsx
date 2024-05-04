import { happy_now } from "../assets/placeholders";
import { PlaylistCard, UserPlaylist } from "../components";
import { getUserData } from "../lib";

import { currentUserData, currentUser } from "../signals";
import { createEffect, createSignal, For, Show } from "solid-js";

const Playlists = () => {

  const [popup, setPopup] = createSignal(false);

  const [playlistName, setPlaylistName] = createSignal('');
  const [message, setMessage] = createSignal(false);

  createEffect(() => {
    getUserData();
  })

  createEffect(() => {
    console.log(currentUserData());
  })

  const createPlaylist = () => {
    console.log(playlistName());

    fetch('https://owsaka4efb.execute-api.ap-south-1.amazonaws.com/Testing/songs/createPlaylist', {
      method: "POST",
      body: JSON.stringify({
        username: currentUser(),
        playlistName: playlistName()
      })
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json(); // assuming the response is JSON
    })
    .then((data) => {
      console.log(data);
      setMessage(true);
      getUserData();
    })
    .catch((error) => {
      console.error('Error:', error);
    });


    setPopup(false)
  }

  return (
    <main>
      <h2 class="text-5xl font-bold">Playlists</h2>
      <div class="flex gap-8 py-4">
        <PlaylistCard playlistName='My Liked Songs' id='liked' srcImage={happy_now} />
        <For each={currentUserData()?.playlists}>
          {(playlist, index) => {
            if(playlist in currentUserData()){
              return <UserPlaylist playlist={currentUserData()[`${playlist}`]} playlistName={playlist} />
            }
            // if(currentUserData().playlist) {
            //   return <PlaylistCard playlistName={playlist} id={index} />
            // }
          }}
        </For>
        <div class="flex flex-col justify-center relative items-center w-60 h-60 shadow-2xl drop-shadow-2xl rounded-md overflow-hidden hover:-translate-y-2 border hover:border-white border-transparent hover:shadow-white/10 hover:shadow-2xl duration-500 hover:cursor-pointer" onClick={() => setPopup(true)}>
          <Show when={!popup() && !message()}>
            <h5>Create Playlist</h5>
          </Show>
          <Show when={popup()}>
            <div class="absolute w-full h-full flex flex-col justify-center items-center">
              <input type="text" value={playlistName()} onChange={(e) => setPlaylistName(e.target.value)} class="rounded-md text-black" />
              <button onClick={createPlaylist}>Create</button>
            </div>
          </Show>
          <Show when={message()}>
            <h5>Created Playlist</h5>
          </Show>
        </div>
        {/* <PlaylistCard playlistName='My Liked Songs' srcImage={happy_now} />
        <PlaylistCard playlistName='EDM' srcImage={starlight} />
        <PlaylistCard playlistName='Pop' srcImage={safe_and_sound} />
        <PlaylistCard playlistName='Rock Music' srcImage={way_down_we_go} /> */}
      </div>
    </main>
  )
};

export default Playlists;