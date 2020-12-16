import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TopicList from '@/utils/data/topic.json';

import RoundTimer from '@/components/elements/ingame/RoundTimer';

import '@/assets/scss/pages/GameSetting.scss';

const GameSetting = () => {
  const { timeOut, topicLength } = useSelector(state => ({
    timeOut: state.game.timeout,
    topicLength: state.game.topicLength,
  }));
  const history = useHistory();
  const topicList = TopicList[`length${topicLength}`];
  const topic = topicList[Math.floor(Math.random() * topicList.length)];
  useEffect(() => {
    document.addEventListener('animationend', () => {
      history.push('/ingame', { topic });
    });
  }, []);
  return (
    <div className="gamesetting">
      <RoundTimer time={timeOut} />
      <div className="text__container">
        <p className="text__container--title">주제어</p>
        <h4 className="text__container--contents">{topic}</h4>
      </div>
    </div>
  );
};

export default GameSetting;
