import React from 'react';
import classNames from 'classnames';
import useToggle from '@/utils/hooks/useToggle';

import '@/assets/scss/commons/Button.scss';

const TOGGLE = 'toggle';

const Button = ({ contents, shape, color, toggle, type, hook }) => {
  const [isToggle, onToggle] = useToggle(toggle);
  const onClick = () => {
    onToggle();
    hook();
  };
  if (type === TOGGLE) {
    return (
      <button
        onClick={onClick}
        className={classNames('button', shape, color, isToggle ? 'active' : '')}
      >
        {contents}
      </button>
    );
  }
  return (
    <button onClick={onClick} className={classNames('button', shape, color)}>
      {contents}
    </button>
  );
};

Button.defaultProps = {
  contents: 'empty',
  shape: 'default',
  color: 'white',
  toggle: false,
  type: 'button',
  hook: () => {},
};

export default Button;
