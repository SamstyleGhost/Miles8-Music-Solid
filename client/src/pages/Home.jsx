import { createEffect } from "solid-js";
import { getUserData } from "../lib";

const Home = () => {

  createEffect(() => {
    getUserData();
    
  })

  return (
    <main class="h-full w-full flex justify-center items-center">
      <div>Home</div>
    </main>
  )
};

export default Home;