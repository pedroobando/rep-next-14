import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoHeartCircleOutline, IoLogoReact, IoSpeedometer } from 'react-icons/io5';
import { SidebarItem } from '..';

// interface Props {
//   path: string;
//   title: string;
//   subtitle: string;
//   icons: JSX.Element;
// }
// [];

const menuItems = [
  { path: '/dashboard/main', title: 'Dashboard', subtitle: 'Visualizacion', icons: <IoBrowsersOutline size={30} /> },
  {
    path: '/dashboard/counter',
    title: 'Counter',
    subtitle: 'Counter Manager Side Client',
    icons: <IoCalculator size={30} />,
  },
  {
    path: '/dashboard/pokemons',
    title: 'Pokemos',
    subtitle: 'Control Pokemos',
    icons: <IoSpeedometer size={30} />,
  },
  {
    path: '/dashboard/favorites',
    title: 'Favoritos',
    subtitle: 'Favoritos Pokemos',
    icons: <IoHeartCircleOutline size={30} />,
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span className="mr-2">Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
              width={80}
              height={80}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Pedro Obando</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((itemMenu) => (
          <SidebarItem key={itemMenu.path} {...itemMenu} />
        ))}
      </div>
    </div>
  );
};
