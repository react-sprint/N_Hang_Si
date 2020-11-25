import React from 'react';
import classNames from 'classnames';
import useToggle from '@/utils/hooks/useToggle';

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

const Button = ({ contents, shape, color, toggle, type }) => {
  if (type === 'toggle') {
    const [isToggle, onToggle] = useToggle(toggle);
    return (
      <button
        onClick={onToggle}
        className={classNames('button', shape, color, isToggle ? 'active' : '')}
      >
        {contents}
      </button>
    );
  }
  return (
    <button className={classNames('button', shape, color)}>{contents}</button>
  );
};

Button.defaultProps = {
  contents: 'empty',
  shape: 'default',
  color: 'white',
  toggle: false,
  type: 'button',
};

export default Button;
