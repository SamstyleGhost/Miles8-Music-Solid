import { createEffect, createSignal, For } from "solid-js";
import { Song } from "../components";

const Songs = () => {

  const [songData, setSongData] = createSignal([]);

  createEffect(() => {
    fetch('https://owsaka4efb.execute-api.ap-south-1.amazonaws.com/Testing/songs/getAllSongs')
      .then(async (res) => {
        const response = await res.json();
        const responseData = await JSON.parse(response.body.data);
        setSongData(responseData);
      })
  })

  return (
    <main>
      <h2 class="text-5xl font-bold">Songs</h2>
      <div class="flex flex-col gap-0.5 w-full mt-5">
        <For each={songData()}>
          {song => {
            return <Song 
              id={song.songID}
              songTitle={song.songName}
              songArtists={song.artistName}
              uuid={song.uuid}
              songAlbum={song.albumName}
              songDuration="03:31"
            />
          }}
        </For>
      </div>
    </main>
  )
};

export default Songs;