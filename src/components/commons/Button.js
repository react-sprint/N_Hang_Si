import React from 'react';
import classNames from 'classnames';

import '@/assets/scss/commons/Button.scss';

/* 
Button
  shape
    default
    round
    square
  color
    orange
    white
    black
  contents
*/

const Button = ({ contents, shape, color }) => {
  // 토글 추가 예정
  return (
    <button type="button" className={classNames('button', shape, color)}>
      {contents}
    </button>
  );
};

Button.defaultProps = {
  contents: 'empty',
  shape: 'default',
  color: 'white',
};

export default Button;
