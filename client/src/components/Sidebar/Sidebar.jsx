import { home, playlist, plus, settings, songs } from "../../assets/icons";
import { logo_full } from "../../assets/logo";

const SidebarIcon = (props) => {
  return (
    <a href={props.href} class="flex justify-center items-center hover:bg-accent/20 transition-colors duration-500 rounded-md p-1">
      <img src={props.srcImage} width={30} height={30} />
    </a>
  )
}

const Sidebar = () => {

  return (
    <nav id="sidebar" class="sticky top-0 left-0 flex flex-col gap-2 p-2 justify-center text-text">
      <div class="w-16 h-16 rounded-md overflow-hidden">
        <img src={logo_full} class="w-16 h-16" alt="logo" />
      </div>
      <div class="flex flex-col justify-between sidebar-background rounded-md w-16 h-full">

        <div class="flex flex-col gap-3 w-full rounded-md p-2">
          <SidebarIcon href='/home' srcImage={home} />
          <SidebarIcon href='/songs' srcImage={songs} />
          <SidebarIcon href='/playlists' srcImage={playlist} />
        </div>
        <div class="flex flex-col gap-3 w-full rounded-md p-2">
          <SidebarIcon href='/upload' srcImage={plus} />
          <SidebarIcon href='/settings' srcImage={settings} />
        </div>
      </div>
    </nav>
  )
};

export default Sidebar;