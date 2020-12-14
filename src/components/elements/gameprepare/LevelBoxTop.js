import React from 'react';
import classNames from 'classnames';
import '@/assets/scss/layouts/gameprepare/LevelBoxTop.scss';

const LevelBoxTop = () => {
  const img1 = 'https://place-hold.it/300x300/eee';
  const img2 = 'https://place-hold.it/300x300/ccc';
  const img3 = 'https://place-hold.it/300x300/000';

  return (
    <div className="level--box__top">
      <div className="img--container">
        <div className={classNames('img--box', 'active')}>
          <img src={img1} alt="임시이미지" />
        </div>
        <div className={classNames('img--box')}>
          <img src={img2} alt="임시이미지" />
        </div>
        <div className={classNames('img--box')}>
          <img src={img3} alt="임시이미지" />
        </div>
      </div>
    </div>
  );
};

export default LevelBoxTop;
