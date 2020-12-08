import React from 'react';
import RankInfo from '@/components/elements/rank/RankInfo';

export default {
  title: 'RankInfo',
  component: RankInfo,
  argTypes: {
    ranking: {
      control: { type: 'range', min: 1 },
      defaultValue: 1,
    },
    nickname: {
      control: 'text',
    },
    time: {
      control: 'number',
    },
    timeOut: {
      control: 'number',
    },
    level: {
      control: { type: 'select', options: ['지렁이', '일반인', '박명수'] },
    },
    like: {
      control: 'number',
    },
  },
};

export const Default = ({ ranking, nickname, time, timeOut, level, like }) => (
  <RankInfo
    ranking={ranking}
    nickname={nickname}
    time={time}
    timeOut={timeOut}
    level={level}
    like={like}
  />
);
