import logo_bg from './../../assets/logo/logo_bg.jpeg';
import logo_full from './../../assets/logo/logo_full.jpeg'

const TopBar = () => {
  return (
    <div id='topbar' class='w-full h-20 flex justify-between p-2'>
      <div class='w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center'>
        <img src={logo_full} class='w-16 h-16' />
      </div>
    </div>
  )
};

export default TopBar;