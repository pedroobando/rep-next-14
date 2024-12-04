'use client';

import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiBookmarkCheck } from 'react-icons/ci';

{
  /* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */
}

interface Props {
  path: string;
  title: string;
  // subtitle: string;
  icons: ReactNode;
}

const activeClassName = 'text-white bg-gradient-to-r from-sky-600 to-cyan-400';

export const SidebarItem: FC<Props> = ({ path, title, icons }) => {
  const pathName = usePathname();
  return (
    <>
      <li>
        <Link
          href={path}
          className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-200 ${
            pathName === path && activeClassName
          }`}
        >
          {icons}
          {/* <CiBookmarkCheck size={30} /> */}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  );
};
