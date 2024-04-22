import { Router, Route } from "@solidjs/router";

import { Home, Playlists, Settings, Songs, Upload, Playlist } from "./pages";
import { Sidebar, AudioPlayer } from "./components";

const App = () => {
  return (
    <div class="bg-background text-text flex">
      <Sidebar />
      <div class="w-full h-dvh mr-2 flex flex-col">
        <Router>
          <Route path='/' component={Home} />
          <Route path='/playlists' component={Playlists} />
          <Route path='/playlist/:id' component={Playlist} />
          <Route path='/songs' component={Songs} />
          <Route path='/upload' component={Upload} />
          <Route path='/settings' component={Settings} />
        </Router>
        <AudioPlayer />
      </div>
      
    </div>
  )
};

export default App;