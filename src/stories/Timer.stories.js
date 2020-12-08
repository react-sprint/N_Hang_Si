import React, { useEffect, useState } from 'react';
import BarTimer from '@/components/elements/nav/BarTimer';
import TextTimer from '@/components/elements/nav/TextTimer';
import useInterval from '@/utils/hooks/useInterval';

export default {
  title: 'Timer',
  argTypes: {
    time: {
      control: { type: 'range', min: 20, max: 360, step: 20 },
    },
    start: {
      control: 'boolean',
    },
  },
};

export const Default = ({ time, start }) => {
  const [timer, setTimer] = useState(0);
  const timeOut = time;
  const [isRunning, setIsRunning] = useState(false);
  const [change, setChange] = useState(true);
  useInterval(
    () => {
      setTimer(timer + 1);
      if (timer === timeOut - 1) {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null,
  );
  useEffect(() => {
    if (change) {
      if (start) {
        setIsRunning(true);
        setChange(true);
      }
    }
  }, start);

  return (
    <div className="flex-culomn">
      <TextTimer time={timer} timeout={timeOut} />
      <BarTimer time={timer} timeout={timeOut} isActive={isRunning} />
    </div>
  );
};
