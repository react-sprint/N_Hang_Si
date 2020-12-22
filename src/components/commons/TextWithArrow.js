import React from 'react';
import ArrowSvg from '@/assets/images/ArrowSvg.svg';

import '@/assets/scss/commons/TextWithArrow.scss';

const TextWithArrow = ({ text }) => {
  return (
    <div className="textwitharrow">
      <img src={ArrowSvg} alt="화살표" />
      <p>{text}</p>
    </div>
  );
};

TextWithArrow.defaultProps = {
  text: '테스트 중 입니다.',
};

export default TextWithArrow;
