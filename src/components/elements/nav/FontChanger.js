import React, { useState } from 'react';
import '@/assets/scss/elements/nav/FontChanger.scss';

const FontChanger = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div className="font__changer">
        <p>큰 글씨 조정</p>
        <div className="changer__container">
          <button className="button" onClick={onDecrease}>
            -
          </button>
          <span className="changer">{number}</span>
          <button className="button" onClick={onIncrease}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default FontChanger;
