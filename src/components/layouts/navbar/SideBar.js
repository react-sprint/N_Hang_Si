import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/images/svg/LogoSvg';
import GithubSvg from '@/assets/images/svg/GithubSvg';

import '@/assets/scss/layouts/navbar/SideBar.scss';

const SideBar = ({ isActive }) => {
  return (
    <div className={classNames('sidebar', isActive ? 'active' : 'deactive')}>
      <div className="sidebar__top">
        <LogoSvg type="white" />
        <div className="link__container">
          <Link className="link__item" to="/rank">
            <span>명예의 전당</span>
          </Link>
          <Link className="link__item" to="/">
            <span>게임 방법</span>
          </Link>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom--title">
          <p>Developer</p>
          <GithubSvg />
        </div>
        <div className="sidebar__bottom--items">
          <a href="https://github.com/jeongnaehyeok">방구석 호랑이</a>
          <a href="https://github.com/dddieon">Jeon Jiwon</a>
          <a href="https://github.com/qkaxhfms">MinSangKwak</a>
        </div>
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  isActive: false,
};
export default SideBar;
