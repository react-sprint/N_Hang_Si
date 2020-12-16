import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nextstep } from '@/modules/game';
import classNames from 'classnames';
import '@/assets/scss/pages/GamePrepare.scss';

import LevelBoxTop from '@/components/layouts/gameprepare/LevelBoxTop';
import LevelBox from '@/components/layouts/gameprepare/LevelBox';
import TopicLengthBox from '@/components/layouts/gameprepare/TopicLengthBox';
import NicknameInputBox from '@/components/layouts/gameprepare/NicknameInputBox';
import Button from '@/components/commons/Button';

const GamePrepare = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState('일반인');
  const [topicLength, setTopicLength] = useState('3');
  const [nickname, setNickname] = useState('');

  const handleModal = () => {
    if (!level || !topicLength || !nickname) {
      return alert('모든 설정을 완료해주세요');
    }
    return dispatch(nextstep(nickname, level, topicLength));
  };

  const ChoiceLevel = value => {
    setLevel(value);
  };

  const ChoiceTopicLength = value => {
    setTopicLength(value);
  };

  const ChangeNicknameInput = value => {
    setNickname(value);
  };

  return (
    <div className="gameprepare">
      <LevelBoxTop select={level} />
      <LevelBox hook={ChoiceLevel} />
      <TopicLengthBox hook={ChoiceTopicLength} />
      <NicknameInputBox hook={ChangeNicknameInput} />
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
