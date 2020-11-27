import React, { useState } from 'react';
import BarTimer from '@/components/elements/nav/BarTimer';
import useInterval from '@/utils/hooks/useInterval';

export default {
  title: 'BarTimer',
  component: BarTimer,
};

export const Default = () => <BarTimer />;
export const Timer20Sec = () => {
  const TimeOut = 20;

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useInterval(
    () => {
      setTimer(timer + 1);
      if (timer === TimeOut) {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null,
  );

  return <BarTimer time={timer} timeout={TimeOut} />;
};
