import React, { useEffect, useState } from 'react';
import BarTimer from '@/components/elements/nav/BarTimer';
import TextTimer from '@/components/elements/nav/TextTimer';

export default {
  title: 'Timer',
  argTypes: {
    time: {
      control: { type: 'range', min: 20, max: 360, step: 20 },
      defaultValue: 40,
    },
    start: {
      control: 'boolean',
    },
  },
};

export const Default = ({ time, start }) => {
  const timeOut = time;
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (start) {
      if (timer < timeOut) {
        setIsRunning(true);
      }
    }
  }, start);

  useEffect(() => {
    if (isRunning) {
      const countdown = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => {
        clearInterval(countdown);
        if (timer > timeOut - 2) {
          setIsRunning(false);
        }
      };
    }
    return false;
  }, [timer, isRunning]);
  return (
    <div className="flex-culomn">
      <TextTimer time={timeOut - timer} />
      <BarTimer
        timer={timeOut - timer}
        timeout={timeOut}
        isActive={isRunning}
      />
    </div>
  );
};
