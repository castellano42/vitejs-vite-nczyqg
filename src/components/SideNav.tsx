import StyleIcon from '@mui/icons-material/Style';
import Favorite from '@mui/icons-material/Favorite'
import Search from '@mui/icons-material/Search'

function SideNavItem({ name, icon }) {
  return (
    <span className="flex justify-between py-4 px-8">
      {icon}
      {name}
    </span>
  );
}

function SideNav() {
  return (
    <div className="py-5 text-white">
      <div>
      <SideNavItem name="My Library" icon={<StyleIcon />} />
      </div>
      <div>
      <SideNavItem name="Wishlist" icon={<Favorite />} />
      </div>
      <div>
      <SideNavItem name="Search" icon={<Search />} />
      </div>
      <div>
      <SideNavItem name="Add Folder" icon={<StyleIcon />} />
      </div>
    </div>
  );
}

export default SideNav;
