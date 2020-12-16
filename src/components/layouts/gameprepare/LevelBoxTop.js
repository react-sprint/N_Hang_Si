import React from 'react';
import classNames from 'classnames';

import Easy from '@/assets/images/easy.png';
import Normal from '@/assets/images/normal.png';
import Hard from '@/assets/images/hard.png';

import '@/assets/scss/layouts/gameprepare/LevelBoxTop.scss';

const EASY = '지렁이';
const NORMAL = '일반인';
const HARD = '박명수';

const LevelBoxTop = ({ select }) => {
  return (
    <div className="level--box__top">
      <div className="img--container">
        <div
          className={classNames('img--box', select === EASY ? 'active' : '')}
        >
          <img src={Easy} alt="지렁이" />
        </div>
        <div
          className={classNames('img--box', select === NORMAL ? 'active' : '')}
        >
          <img src={Normal} alt="일반인" />
        </div>
        <div
          className={classNames('img--box', select === HARD ? 'active' : '')}
        >
          <img src={Hard} alt="박명수" />
        </div>
      </div>
    </div>
  );
};

LevelBoxTop.defaultProps = {
  select: '박명수',
};
export default LevelBoxTop;
