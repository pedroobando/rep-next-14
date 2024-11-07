import Image from 'next/image';
import {
  IoSpeedometerOutline,
  IoPawOutline,
  IoLogOutOutline,
  IoHeartOutline,
  IoListOutline,
  IoAccessibilityOutline,
  // IoBrowsersOutline,
  IoLogoReact,
} from 'react-icons/io5';
import { SidebarItem } from './SidebarItem';

// interface Props {
//   path: string;
//   title: string;
//   subtitle: string;
//   icons: JSX.Element;
// }
// [];

const menuItems = [
  { path: '/dashboard', title: 'Dashboard', subtitle: 'Visualizacion Data', icons: <IoSpeedometerOutline size={30} /> },
  {
    path: '/dashboard/osos',
    title: 'Osos',
    subtitle: 'Manejador de osos',
    icons: <IoPawOutline size={30} />,
  },
  {
    path: '/dashboard/personas',
    title: 'Persona',
    subtitle: 'Compartir Store',
    icons: <IoAccessibilityOutline size={30} />,
  },
  {
    path: '/dashboard/tareas',
    title: 'Tareas',
    subtitle: 'Lista de Tareas',
    icons: <IoListOutline size={30} />,
  },
  {
    path: '/dashboard/boda',
    title: 'Boda',
    subtitle: 'Invitados a la boda',
    icons: <IoHeartOutline size={30} />,
  },
];

export const Sidebar = () => {
  return (
    <aside
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex flex-col md:flex-row items-center text-lg md:text-2xl font-bold text-white transition duration-300">
          <IoLogoReact className="mr-2 invisible md:visible" />
          <span className="mr-2">Zustand</span>
          <span className="text-blue-500">Next-14</span>
        </h1>
        <p className="text-slate-500 text-sm invisible md:visible">Manejando el estado con Zustand</p>
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

      <div className="w-full px-6 mt-12">
        <SidebarItem
          path={'/auth/login'}
          title={'Logout'}
          subtitle={'Cerrar sesion'}
          icons={<IoLogOutOutline size={30} />}
        />
      </div>
    </aside>
  );
};
