import React from 'react';
import '@/assets/scss/elements/ingame/RoundTimer.scss';
import '@/assets/images/round.png';

const RoundTimer = ({ time, isReady }) => {
  return (
    <>
      {isReady ? (
        <div className="round-timer">
          <p className="round-timer--number">
            {time}
            <span>s</span>
          </p>
          <div className="round-timer--inner">
            <svg>
              <circle cx="50" cy="50" r="42" />
              <circle cx="50" cy="50" r="42" />
            </svg>
          </div>
          <div className="round-timer--outer" />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

RoundTimer.defaultProps = {
  time: 120,
  isReady: false,
};

export default RoundTimer;
