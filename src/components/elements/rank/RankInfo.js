/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classNames from 'classnames';
import LikeSvg from '@/assets/images/svg/LikeSvg';

import '@/assets/scss/elements/rank/RankInfo.scss';

const RankInfo = ({ nickName, timeOut, time, level, like, isLike }) => {
  const [isToggle, setIsToggle] = useState(isLike);
  const onClick = e => {
    setIsToggle(!isToggle);
    e.preventDefault();
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classNames('rankinfo', isToggle ? 'active' : '')}
      onClick={onClick}
    >
      <p className={classNames('rankinfo__toprank', isToggle ? 'active' : '')}>
        1
      </p>
      <div
        className={classNames('rankinfo__container', isToggle ? 'active' : '')}
      >
        <div className="infotext">
          <div className="infotext__box">
            <p>작가명</p>
            <p className={isToggle ? 'active' : ''}>{nickName}</p>
          </div>
          <div className="infotext__box">
            <p>소요시간</p>
            <p className={isToggle ? 'active' : ''}>
              {time}s/{timeOut}s
            </p>
          </div>
          <div className="infotext__box">
            <p>난이도</p>
            <p className={isToggle ? 'active' : ''}>{level}</p>
          </div>
        </div>
        <div className={classNames('infolike', isToggle ? 'active' : '')}>
          <LikeSvg isActive={isToggle} />
          <p>{like}</p>
        </div>
      </div>
    </div>
  );
};

RankInfo.defaultProps = {
  isLike: false,
  nickName: '방구석 호랑이',
  timeOut: '50',
  time: '20',
  level: '지렁이',
  like: '20',
};

export default RankInfo;
