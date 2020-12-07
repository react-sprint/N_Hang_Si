import React, { useRef } from 'react';

import HeaderBar from '@/components/layouts/navbar/HeaderBar';
import SideBar from '@/components/layouts/navbar/SideBar';

const Navbar = ({ isActive, hook }) => {
  const navbarRef = useRef();
  return (
    <header ref={navbarRef}>
      <HeaderBar navbarRef={navbarRef} hook={hook} isActive={isActive} />
      <SideBar isActive={isActive} />
    </header>
  );
};

export default Navbar;
