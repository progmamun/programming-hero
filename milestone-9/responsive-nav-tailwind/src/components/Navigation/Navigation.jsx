import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Experience', link: '/experience' },
    { id: 3, name: 'Work', link: '/work' },
    { id: 4, name: 'Contact', link: '/contact' },
  ];
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuAlt3Icon></MenuAlt3Icon>}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${
          open ? 'top-6' : 'top-[-120px]'
        }`}
      >
        {routes.map(route => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
