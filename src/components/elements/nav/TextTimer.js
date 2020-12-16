import React, { useEffect, useState } from 'react';

import '@/assets/scss/elements/nav/TextTimer.scss';

const TextTimer = ({ time }) => {
  const [min, setMin] = useState(setInterval(time / 60));
  const [sec, setSec] = useState(time % 60);
  useEffect(() => {
    setSec(time % 60);
    setMin(parseInt(time / 60, 10));
  }, [time]);
  return (
    <p className="texttimer">
      남은 시간 {(min < 10 ? '0' : '') + min}:{(sec < 10 ? '0' : '') + sec}
    </p>
  );
};

TextTimer.defaultProps = {
  time: 0,
};

export default TextTimer;
