import React, { useEffect, useState } from 'react';

import '@/assets/scss/elements/nav/TextTimer.scss';

const TextTimer = ({ time, timeout }) => {
  const [min, setMin] = useState(setInterval((timeout - time) / 60));
  const [sec, setSec] = useState((timeout - time) % 60);
  useEffect(() => {
    setSec((timeout - time) % 60);
    setMin(parseInt((timeout - time) / 60, 10));
  }, [time, timeout]);
  return (
    <p className="texttimer">
      남은 시간 {(min < 10 ? '0' : '') + min}:{(sec < 10 ? '0' : '') + sec}
    </p>
  );
};

TextTimer.defaultProps = {
  time: 0,
  timeout: 100,
};

export default TextTimer;
