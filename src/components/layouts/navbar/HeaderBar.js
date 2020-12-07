import React from 'react';
import { Route, Link } from 'react-router-dom';
import LogoSvg from '@/assets/images/svg/LogoSvg';
import Hamburger from '@/components/elements/nav/Hamburger';
import TextTimer from '@/components/elements/nav/TextTimer';
import BarTimer from '@/components/elements/nav/BarTimer';

import '@/assets/scss/layouts/navbar/HeaderBar.scss';

const HeaderBar = ({ navbarRef, hook }) => {
  return (
    <>
      <div className="headerbar">
        <div className="headerbar__left">
          <Link to="/">
            <LogoSvg />
          </Link>
          <Route path="/ingame" exact component={TextTimer} />
        </div>
        <div className="headerbar__right">
          <Hamburger el={navbarRef} hook={hook} />
        </div>
      </div>
      <Route path="/ingame" exact component={BarTimer} />
    </>
  );
};

HeaderBar.defaultProps = {
  navbarRef: '',
  hook: () => {},
};

export default HeaderBar;
