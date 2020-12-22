import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nextstep } from '@/modules/game';
import classNames from 'classnames';

import LevelBoxTop from '@/components/layouts/prepare/LevelBoxTop';
import RadioButtonBox from '@/components/layouts/prepare/RadioButtonBox';
import NicknameInputBox from '@/components/layouts/prepare/NicknameInputBox';
import Button from '@/components/commons/Button';
import { modalOpen } from '@/modules/status';

import '@/assets/scss/pages/Prepare.scss';

const Prepare = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [level, setLevel] = useState('일반인');
  const [topicLength, setTopicLength] = useState('4');
  const [nickname, setNickname] = useState('');

  const levelObject = {
    list: ['지렁이', '일반인', '박명수'],
    title: 'n행시 난이도를 선택 해 주세요.',
    Choice: value => {
      setLevel(value);
    },
  };

  const topicObject = {
    list: ['2', '3', '4', '5', '6'],
    title: '글자 수를 선택 해 주세요.',
    Choice: value => {
      setTopicLength(value);
    },
  };

  const nicknameObject = {
    title: '닉네임을 입력해주세요.',
    placeholder: '닉네임을 입력해주세요.',
    Change: value => {
      setNickname(value);
    },
  };

  const nextStep = () => {
    if (!level || !topicLength || !nickname) {
      dispatch(modalOpen('모든 항목을 입력해주세요'));
      return false;
    }
    dispatch(nextstep(nickname, level, topicLength));
    return history.push('/setting');
  };

  const reDirect = () => {
    return history.push('/rule');
  };

  return (
    <div className="prepare">
      <LevelBoxTop select={level} />
      <RadioButtonBox
        hook={levelObject.Choice}
        dataList={levelObject.list}
        defaultValue={level}
        title={levelObject.title}
      />
      <RadioButtonBox
        hook={topicObject.Choice}
        dataList={topicObject.list}
        defaultValue={topicLength}
        title={topicObject.title}
      />
      <NicknameInputBox hook={nicknameObject.Change} />
      <div
        className={classNames(
          'button--bottom',
          'button--container',
          'button--container__shrink',
        )}
      >
        <Button contents="게임 방법" color="black" hook={reDirect} />
        <Button contents="시작하기" color="orange" hook={nextStep} />
      </div>
    </div>
  );
};

export default Prepare;
