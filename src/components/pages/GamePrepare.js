import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nextstep } from '@/modules/game';
import classNames from 'classnames';
import '@/assets/scss/commons/Button.scss';
import '@/assets/scss/layouts/gameprepare/Gameprepare.scss';

import LevelBox from '@/components/layouts/gameprepare/LevelBox';
import TopicLengthBox from '@/components/layouts/gameprepare/TopicLengthBox';
import NicknameInputBox from '@/components/layouts/gameprepare/NicknameInputBox';
import Button from '@/components/commons/Button';
import LevelBoxTop from '../elements/gameprepare/LevelBoxTop';

const GamePrepare = () => {
  // const [level,setLevel] = useState(0);

  const dispatch = useDispatch();
  const nickname = '아무거나';
  const level = '지렁이';
  const topicLength = 1;

  const handleModal = () => {
    dispatch(nextstep(nickname, level, topicLength)); // subscribe
  };

  const active = () => {
    // console.log('abdc');
  };

  return (
    <div className="gameprepare">
      <LevelBoxTop />
      <LevelBox onClick={active} />
      <TopicLengthBox />
      <NicknameInputBox />
      <div
        className={classNames(
          'button--bottom',
          'button--container',
          'button--container__shrink',
        )}
      >
        <Button contents="게임설명" color="black" />
        <Button contents="시작하기" color="orange" hook={handleModal} />
      </div>
    </div>
  );
};

export default GamePrepare;
