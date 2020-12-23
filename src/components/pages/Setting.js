import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TopicList from '@/utils/data/topic.json';

import RoundTimer from '@/components/elements/ingame/RoundTimer';

import '@/assets/scss/pages/Setting.scss';

const Setting = () => {
  const [topic, setTopic] = useState('');

  const { timeOut, topicLength } = useSelector(state => ({
    timeOut: state.game.timeout,
    topicLength: state.game.topicLength,
  }));
  const history = useHistory();
  const topicList = TopicList[`length${topicLength}`];
  useEffect(() => {
    if (topic) {
      document.addEventListener('animationend', () => {
        history.replace('/ingame', { topic });
      });
    }
  }, [topic]);
  useEffect(() => {
    setTopic(topicList[Math.floor(Math.random() * topicList.length)]);
  }, []);
  return (
    <div className="setting">
      <RoundTimer time={timeOut} />
      <div className="setting__text">
        <p className="setting__text--title">주제어</p>
        <h4 className="setting__text--contents">{topic}</h4>
      </div>
    </div>
  );
};

export default Setting;
