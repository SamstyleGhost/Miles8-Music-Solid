import { Router, Route } from "@solidjs/router";

import { Home, Playlists, Settings, Songs, Upload, Playlist, Login } from "./pages";
import { Sidebar, AudioPlayer } from "./components";

const App = () => {
  return (
    <div class="bg-background text-text flex">
      <Sidebar />
      <div class="w-dvw h-dvh flex flex-col">
        <Router>
          <Route path='/' component={Login} />
          <Route path='/home' component={Home} />
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