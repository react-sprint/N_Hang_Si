import React, { useEffect, useState } from 'react';

import '@/assets/scss/elements/nav/BarTimer.scss';

const BarTimer = ({ timer, timeout, isActive }) => {
  const [timerStyle, setTimerStyle] = useState({ transitionDuration: `1s` });
  useEffect(() => {
    if (isActive) {
      const progress = ((timeout - timer) / timeout) * 100;
      if (progress === 80) {
        setTimerStyle({
          ...timerStyle,
          backgroundColor: '#ff5050',
          width: `${progress}%`,
        });
      } else {
        setTimerStyle({
          ...timerStyle,
          width: `${progress}%`,
        });
      }
    }
  }, [timer, isActive]);

  return (
    <div className="bartimer">
      <div className="progresstime" style={timerStyle} />
    </div>
  );
};

BarTimer.defaultProps = {
  timer: 100,
  timeout: 100,
  isActive: true,
};

export default BarTimer;
