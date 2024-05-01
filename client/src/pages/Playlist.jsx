import { useParams } from '@solidjs/router';

import { happy_now, safe_and_sound, starlight, way_down_we_go } from '../assets/placeholders';
import { Song, SingleSong } from '../components';
import { createEffect, For } from 'solid-js';
import { getUserData } from '../lib';
import { currentUserData } from '../signals';

const Playlist = () => {

  const params = useParams();
  console.log(params);

  createEffect(() => {
    getUserData();
  })

  createEffect(() => {
    console.log(currentUserData().likedSongs);
  })



  return (
    <main>
      <div class='flex gap-8'>
        <div class='w-1/4 h-1/4'>
          <img src={happy_now} alt='Playlist Image' class='object-cover w-full h-full' />
        </div>
        <div class='flex flex-col justify-between w-3/4'>
          <div class='py-8'>  
            <h2 class="text-5xl font-bold">My Liked Songs</h2>
            <h6 class='text-sm text-text/50'>Tempor eiusmod elit est officia ipsum sit cupidatat cupidatat enim dolore aliqua aliqua. Duis sint quis minim dolor et consectetur anim ea. Aute veniam commodo esse id et. Sint proident dolor culpa sunt. Excepteur consectetur ullamco occaecat officia aute deserunt sint enim ullamco commodo nulla sunt est. Enim consequat nostrud commodo enim laboris.</h6>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-full mt-5">
        <For each={currentUserData()?.likedSongs}>
          {(song, index) => {
            return <SingleSong id={index} uuid={song}  />
          }}
        </For>
      </div>
    </main>
  )
};

export default Playlist;