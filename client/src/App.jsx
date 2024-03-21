import { Router, Route } from "@solidjs/router";

import { Home, Playlists, Settings, Songs, Upload } from "./pages";
import { Sidebar, AudioPlayer } from "./components";

const App = () => {
  return (
    <div class="bg-background text-text flex overflow-hidden">
      <Sidebar />
      <div class="w-full h-full mr-2 overflow-y-auto">
        <Router>
          <Route path='/' component={Home} />
          <Route path='/playlists' component={Playlists} />
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