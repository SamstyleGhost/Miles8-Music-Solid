import { createSignal, Show, For, createEffect } from "solid-js";
import { extras } from "../../assets/icons";

import { currentSong, currentUser, setCurrentArtist, setCurrentSong, setCurrentTitle } from "../../signals";

const SingleSong = (props) => {

  const [popup, setPopup] = createSignal(false);
  const [songData, setSongData] = createSignal([]);

  let id;
  
  createEffect(() => {

    fetch('https://owsaka4efb.execute-api.ap-south-1.amazonaws.com/Testing/songs/getSong', {
      method: "POST",
      body: JSON.stringify({
        uuid: props.uuid
      })
    })
    .then(async (res) => {
      const response = await res.json();
      const responseData = await JSON.parse(response.body.data);
      setSongData(responseData);
    })

  })

  const addToLikedSongs = () => {

    fetch('https://owsaka4efb.execute-api.ap-south-1.amazonaws.com/Testing/songs/getSong', {
      method: "POST",
      body: JSON.stringify({
        uuid: props.uuid
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
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    setPopup(false);
  }

  const addToPlaylist = () => {

    setPopup(false);
  }

  

  return (
    <div 
      class="flex gap-4 p-2 items-center hover:bg-black/25 hover:cursor-pointer rounded-md" >
      <div class="w-8 text-right font-light text-text/50 text-xs">{props.id}</div>
      <div class="w-full flex items-center relative">
        <div class="flex items-center gap-2 w-1/2">
          <div class="w-9 h-9">
            <img src={`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/images/${props.uuid}.png`} alt={songData()[0]?.songName} class="object-cover w-full h-full rounded-sm" />
          </div>
          <div class="flex flex-col gap-0.5 justify-center" onClick={() => {
              setCurrentSong(props.uuid)
              setCurrentTitle(songData()[0]?.songName)
              setCurrentArtist(songData()[0]?.artistName)
            }}>
            <p class="truncate text-sm">{songData()[0]?.songName}</p>
            <p class="text-xs text-text/80 truncate">{songData()[0]?.artistName}</p>
          </div>
        </div>
        <div class="w-5/12 truncate text-sm">{songData()[0]?.albumName}</div>
        <div class="w-1/12">
          <img src={extras} class="object-cover h-6" onClick={() => setPopup(!popup())} />
        </div>
        <Show when={popup()}>
          <div class="absolute flex flex-col gap-1 -top-2 right-40 z-10 text-accent px-4 py-2 font-semibold border border-accent rounded-md">
            <div onClick={addToLikedSongs} class="hover:text-secondary">Add to Liked Songs</div>
            <div onClick={addToPlaylist} class="hover:text-secondary">Add to Playlist</div>
          </div>
        </Show>
      </div>
    </div>
  )
};

export default SingleSong;