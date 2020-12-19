import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { timeRecord } from '@/modules/game';
import LogoSvg from '@/assets/images/svg/LogoSvg';
import Hamburger from '@/components/elements/nav/Hamburger';
import TextTimer from '@/components/elements/nav/TextTimer';
import BarTimer from '@/components/elements/nav/BarTimer';

import '@/assets/scss/layouts/navbar/HeaderBar.scss';

const HeaderBar = ({ navbarRef, hook }) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { timeOut } = useSelector(state => ({ timeOut: state.game.timeout }));
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
          history.push('/result', { success: false });
        }
      };
    }
    return false;
  }, [timer, isIngame]);

  useEffect(() => {
    switch (location.pathname) {
      case '/ingame':
        setTimer(timeOut);
        setIsIngame(true);
        break;
      case '/result':
        dispatch(timeRecord(timer));
        setIsIngame(false);
        break;
      default:
        setIsIngame(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <LogoSvg />
          </Link>
          {location.pathname === '/ingame' ? <TextTimer time={timer} /> : null}
        </div>
        <div className="header__menu">
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
