import { useSearchParams } from "@solidjs/router";

const Home = () => {

  const search = useSearchParams();
  console.log(search[0].code); 

  

  return (
    <main class="h-full w-full flex justify-center items-center">
      <div>Home</div>
    </main>
  )
};

export default Home;