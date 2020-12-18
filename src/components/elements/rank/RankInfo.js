import React, { useState } from 'react';
import classNames from 'classnames';
import LikeSvg from '@/assets/images/svg/LikeSvg';

import '@/assets/scss/elements/rank/RankInfo.scss';

const RankInfo = ({
  nickname,
  timeOut,
  time,
  level,
  like,
  isLike,
  ranking,
  hook,
}) => {
  const [isToggle, setIsToggle] = useState(isLike);
  const isRanker = ranking < 10;
  const onClick = e => {
    setIsToggle(!isToggle);
    e.preventDefault();
    hook(!isToggle);
  };

  return (
    <div className={classNames('rankinfo', isToggle ? 'active' : '')}>
      <p
        className={classNames(
          'rankinfo__toprank',
          isToggle ? 'active' : '',
          isRanker ? 'ranker' : 'general',
        )}
      >
        {ranking}
      </p>
      <div
        className={classNames('rankinfo__container', isToggle ? 'active' : '')}
      >
        <div className={classNames('infobox', isToggle ? 'active' : '')}>
          <p className={isRanker ? 'ranker' : 'general'}>{ranking}위</p>
          <div className="infotext">
            <p className="infotext--title">작가명</p>
            <p
              className={classNames(
                'infotext--contents',
                isToggle ? 'active' : '',
              )}
            >
              {nickname}
            </p>
          </div>
          <div className="infotext">
            <p className="infotext--title">소요시간</p>
            <p
              className={classNames(
                'infotext--contents',
                isToggle ? 'active' : '',
              )}
            >
              {time}s / {timeOut}s
            </p>
          </div>
          <div className="infotext">
            <p className="infotext--title">난이도</p>
            <p
              className={classNames(
                'infotext--contents',
                isToggle ? 'active' : '',
              )}
            >
              {level}
            </p>
          </div>
        </div>
        <div
          className={classNames('infolike', isToggle ? 'active' : '')}
          onClick={onClick}
          aria-hidden="true"
        >
          <LikeSvg isActive={isToggle} />
          <p>{like < 100 ? like : '99+'}</p>
        </div>
      </div>
    </div>
  );
};

RankInfo.defaultProps = {
  isLike: false,
  nickname: '방구석 호랑이',
  timeOut: 50,
  time: 20,
  level: '지렁이',
  like: 31,
  ranking: 1,
  hook: () => {},
};

export default RankInfo;
