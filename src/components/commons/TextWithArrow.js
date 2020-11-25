import React from 'react';
import ArrowSvg from '@/assets/images/svg/ArrowSvg';

import '@/assets/scss/commons/TextWithArrow.scss';

const TextWithArrow = ({ text }) => {
  return (
    <div className="textwitharrow">
      <ArrowSvg />
      <p>{text}</p>
    </div>
  );
};

TextWithArrow.defaultProps = {
  text: '테스트 중 입니다.',
};

export default TextWithArrow;
