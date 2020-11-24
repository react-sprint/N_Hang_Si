import React from 'react';
import classNames from 'classnames';

import '@/assets/scss/commons/Button.scss';

/* 
Button
  shape
    default
    round
  color
    orange
    white
    black
  contents
*/

const Button = ({ contents, shape, color }) => {
  // 토글 추가 예정
  return (
    <div className="buttonWrap">
      <button type="button" className={classNames('button', shape, color)}>
        {contents}
      </button>
    </div>
  );
};

Button.defaultProps = {
  contents: 'empty',
  shape: 'default',
  color: 'white',
};

export default Button;
