import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '../active-link/ActiveLink';

const itemsNav: {
  path: string;
  text: string;
}[] = [
  { path: '/about', text: 'About' },
  { path: '/price', text: 'Price' },
  { path: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  // console.log('navbar creado');

  return (
    <nav className="flex flex-row bg-blue-800 bg-opacity-30 p-2 my-2 mx-4  rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon size={16} />
        <span className="ml-1">home</span>
      </Link>
      <div className="flex flex-1"></div>

      {itemsNav.map((navitem) => (
        <ActiveLink key={navitem.path} {...navitem} />
      ))}
    </nav>
  );
};
