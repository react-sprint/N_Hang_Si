import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TopicList from '@/utils/data/topic.json';

import RoundTimer from '@/components/elements/ingame/RoundTimer';

import '@/assets/scss/pages/GameSetting.scss';

const GameSetting = () => {
  const topicLength = 4;
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
      <RoundTimer />
      <div className="text__container">
        <p className="text__container--title">주제어</p>
        <h4 className="text__container--contents">{topic}</h4>
      </div>
    </div>
  );
};

export default GameSetting;
