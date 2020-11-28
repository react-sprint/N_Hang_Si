import React, { useEffect, useState } from 'react';

import '@/assets/scss/elements/nav/BarTimer.scss';

const BarTimer = ({ time, timeout, isActive }) => {
  const [timerStyle, setTimerStyle] = useState({});
  useEffect(() => {
    if (isActive) {
      setTimerStyle({
        transitionDuration: `${timeout}s`,
        width: `100%`,
      });
    }
    if (time / timeout > 0.7) {
      setTimerStyle({
        ...timerStyle,
        transitionDuration: `${timeout * 0.05}s`,
        backgroundColor: '#FF5050',
      });
    }
  }, [time, timeout]);

  return (
    <div className="bartimer">
      <div className="progresstime" style={timerStyle} />
    </div>
  );
};

BarTimer.defaultProps = {
  time: 0,
  timeout: 100,
  isActive: true,
};

export default BarTimer;
