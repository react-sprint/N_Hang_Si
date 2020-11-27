import React, { useState } from 'react';
import BarTimer from '@/components/elements/nav/BarTimer';
import TextTimer from '@/components/elements/nav/TextTimer';
import useInterval from '@/utils/hooks/useInterval';

export default {
  title: 'Timer',
};

export const DefaultBarTimer = () => <BarTimer />;
export const DefaultTextTimer = () => <TextTimer />;
export const TimerTest = () => {
  const [timer, setTimer] = useState(0);
  const [timeOut, setTimeOut] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [change, setChange] = useState(false);
  useInterval(
    () => {
      setTimer(timer + 1);
      if (timer === timeOut - 1) {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null,
  );

  const onClick = () => {
    if (!change) {
      setIsRunning(true);
      setChange(true);
    }
  };
  const onChange = e => {
    setTimeOut(e.target.value);
  };

  return (
    <div className="flex-colomn">
      <input onChange={onChange} disabled={change} value={timeOut} />
      <TextTimer time={timer} timeout={timeOut} />
      <BarTimer time={timer} timeout={timeOut} isActive={isRunning} />
      <button onClick={onClick}>테스트 시작</button>
    </div>
  );
};
