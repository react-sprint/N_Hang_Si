import React, { useState } from 'react';
import classNames from 'classnames';

import '@/assets/scss/commons/Button.scss';

const TOGGLE = 'toggle';

const Button = ({ contents, shape, color, active, type, hook, value }) => {
  const [isActive, setIsActive] = useState(active);
  const onToggle = e => {
    setIsActive(!isActive);
    hook(e.target.value, !isActive);
  };
  const onClick = e => {
    hook(e.target.value);
  };
  switch (type) {
    case TOGGLE:
      return (
        <button
          onClick={onToggle}
          className={classNames(
            'button',
            shape,
            color,
            isActive ? 'active' : '',
          )}
          value={value}
        >
          {contents}
        </button>
      );
    default:
      return (
        <button
          onClick={onClick}
          className={classNames('button', shape, color, active ? 'active' : '')}
          value={value}
        >
          {contents}
        </button>
      );
  }
};

Button.defaultProps = {
  contents: 'empty',
  shape: 'default',
  color: 'white',
  active: false,
  type: 'button',
  value: '',
  hook: () => {},
};

export default Button;
