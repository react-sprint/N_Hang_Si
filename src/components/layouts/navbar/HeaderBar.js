import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import LogoSvg from '@/assets/images/svg/LogoSvg';
import Hamburger from '@/components/elements/nav/Hamburger';
import TextTimer from '@/components/elements/nav/TextTimer';
import BarTimer from '@/components/elements/nav/BarTimer';

import '@/assets/scss/layouts/navbar/HeaderBar.scss';

const HeaderBar = ({ navbarRef, hook }) => {
  const timeOut = 10; // 나중에 리덕스에서 가져와야 하는 부분
  const location = useLocation();
  const history = useHistory();
  const [timer, setTimer] = useState(timeOut);
  const [isIngame, setIsIngame] = useState(false);

  useEffect(() => {
    if (isIngame) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearInterval(countdown);
        if (timer < 1) {
          setIsIngame(false);
          history.push('/result/fail', { success: false });
        }
      };
    }
    return false;
  }, [timer, isIngame]);

  useEffect(() => {
    switch (location.pathname) {
      case '/ingame':
        setTimer(10);
        setIsIngame(true);
        break;
      case '/result/success':
        // dispatch 해야하는 부분
        setIsIngame(false);
        break;
      default:
        setIsIngame(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="headerbar">
        <div className="headerbar__left">
          <Link to="/">
            <LogoSvg />
          </Link>
          {location.pathname === '/ingame' ? <TextTimer time={timer} /> : null}
        </div>
        <div className="headerbar__right">
          <Hamburger el={navbarRef} hook={hook} />
        </div>
      </div>
      {location.pathname === '/ingame' ? (
        <BarTimer timer={timer} timeout={timeOut} isActive={isIngame} />
      ) : null}
    </>
  );
};

HeaderBar.defaultProps = {
  navbarRef: '',
  hook: () => {},
};

export default HeaderBar;
