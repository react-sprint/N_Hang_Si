import React, { useState, useEffect } from 'react';
import { isLoading, isSuccess } from '@/modules/status';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TopicList from '@/utils/data/topic.json';

import RoundTimer from '@/components/elements/ingame/RoundTimer';

import '@/assets/scss/pages/GameSetting.scss';

const GameSetting = () => {
  const topicLength = 4;
  const history = useHistory();
  const dispatch = useDispatch();
  const [topic, setTopic] = useState('');
  const makeTopic = () => {
    const dummy = TopicList[`length${topicLength}`];
    setTopic(dummy[Math.floor(Math.random() * dummy.length)]);
  };
  useEffect(() => {
    document.addEventListener('animationend', () => {
      history.push('/ingame', { topic });
    });
  }, []);
  useEffect(() => {
    dispatch(isLoading());
    makeTopic();
    dispatch(isSuccess());
  }, [history]);
  return (
    <div className="gamesetting">
      <RoundTimer />
      <div className="text__container">
        <p className="text__container--title">주제어</p>
        <h4 className="text__container--contents">{topic}</h4>
      </div>
    </div>
  );
};

export default GameSetting;
