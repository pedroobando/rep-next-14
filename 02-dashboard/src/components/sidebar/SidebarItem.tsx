'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  title: string;
  subtitle: string;
  icons: JSX.Element;
}

export const SidebarItem = ({ path, title, subtitle, icons }: Props) => {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <Link
      href={path}
      // className={`${style.link}  ${pathName === path && style['active-link']}`}

      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
        pathName === path && `bg-blue-800`
      }`}
    >
      <div>
        <div>{icons}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  );
};
