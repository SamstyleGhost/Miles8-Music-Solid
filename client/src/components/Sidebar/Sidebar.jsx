import { home, playlist, plus, settings, songs } from "../../assets/icons";

const SidebarIcon = (props) => {
  return (
    <a href={props.href} class="flex justify-center items-center hover:bg-accent/20 transition-colors duration-500 rounded-md p-2">
      <img src={props.srcImage} width={36} height={36} />
    </a>
  )
}

const Sidebar = () => {
  return (
    <nav class="sticky top-0 left-0 flex p-2 justify-center text-text">
      <div class="flex flex-col justify-between sidebar-background rounded-md">

        <div class="flex flex-col gap-4 w-full rounded-md p-2">
          <SidebarIcon href='/' srcImage={home} />
          <SidebarIcon href='/songs' srcImage={songs} />
          <SidebarIcon href='/playlists' srcImage={playlist} />
        </div>
        <div class="flex flex-col gap-4 w-full rounded-md p-2">
          <SidebarIcon href='/upload' srcImage={plus} />
          <SidebarIcon href='/settings' srcImage={settings} />
        </div>
      </div>
    </nav>
  )
};

export default Sidebar;