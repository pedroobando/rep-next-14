import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import {
  IoBookmarkOutline,
  IoCalendarOutline,
  IoListOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

import { SidebarItem } from './SidebarItem';

const menuItems = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icons: <IoCalendarOutline size={30} />,
  },
  {
    path: '/dashboard/rest-todos',
    title: 'Todo Rest',
    icons: <IoBookmarkOutline size={30} />,
  },
  {
    path: '/dashboard/server-todos',
    title: 'Server Actions',
    icons: <IoListOutline size={30} />,
  },
];

export const Sidebar: FC = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href={'/dashboard'} className="w-full flex justify-center ">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg"
              width={0}
              height={0}
              className="w-36"
              alt="tailus binace"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            width={0}
            height={0}
            src="/avataaars.svg"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            alt="people"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul id="nav" className="space-y-2 tracking-wide mt-8">
          {menuItems.map((itemMenu) => (
            <SidebarItem key={itemMenu.path} {...itemMenu} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <IoLogOutOutline />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
