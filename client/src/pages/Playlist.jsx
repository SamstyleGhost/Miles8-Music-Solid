import { useParams } from '@solidjs/router';

import { happy_now, safe_and_sound, starlight, way_down_we_go } from '../assets/placeholders';
import { Song, SingleSong } from '../components';
import { createEffect, createSignal, For } from 'solid-js';
import { getUserData } from '../lib';
import { currentUserData } from '../signals';

const Playlist = () => {

  const [currentPlaylist, setCurrentPlaylist] = createSignal();

  const params = useParams();
  console.log(params);

  createEffect(() => {
    if(params.id === 'liked'){
      setCurrentPlaylist(currentUserData()?.likedSongs);
    } else {
      console.log(currentUserData()[`${params.id}`]);
      setCurrentPlaylist(currentUserData()[`${params.id}`])
    }
  })

  createEffect(() => {
    getUserData();
  });

  createEffect(() => {
    console.log(`${params.id}` === 'Hindi');
    console.log(currentUserData()['Hindi']);
  })

  createEffect(() => {
    console.log(currentPlaylist());
  })

  return (
    <main>
      <div class='flex gap-8'>
        <div class='w-1/4 h-1/4'>
          {params.id === 'liked' ?
            <img src={happy_now} alt='Playlist Image' class='object-cover w-full h-full' />
            :
            <img src={`${import.meta.env.VITE_CLOUDFRONT_DISTRIBUTION_URL}/images/${currentPlaylist()?.[0]}.png`} alt='Playlist Image' class='object-cover w-full h-full' />
          }
          
        </div>
        <div class='flex flex-col justify-between w-3/4'>
          <div class='py-8'>  
            <h2 class="text-5xl font-bold">{params.id === 'liked' ? 'My Liked Songs' : params.id}</h2>
            <h6 class='text-sm text-text/50'>{params.id === 'liked' ? 'These are your liked songs......!!!!' : params.id}</h6>
          </div>
          {/* <div>
            <div class='flex gap-2 items-center'>
              <p class='text-sm text-text/60'>Playlist made by:</p>
              <p>Current User</p>
            </div>
            <div class='flex gap-2 items-center'>
              <p class='text-sm text-text/60'>Playlist made on:</p>
              <p>22/02/2024</p>
            </div>
            <div class='flex gap-2 items-center'>
              <p class='text-sm text-text/60'>Playlist made on:</p>
              <p>22/02/2024</p>
            </div>
            <div class='w-full'>
              <p>4 songs</p>
            </div>
          </div> */}
        </div>
      </div>
      <div class="flex flex-col gap-1 w-full mt-5">
        <For each={currentPlaylist()}>
          {(song, index) => {
            console.log(song);
            return <SingleSong id={index} uuid={song}  />
          }}
        </For>
      </div>
    </main>
  )
};

export default Playlist;