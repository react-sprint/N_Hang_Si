import React, { useEffect } from 'react';
import classNames from 'classnames';

import useNavToggle from '@/utils/hooks/useNavToggle';

import '@/assets/scss/elements/nav/Hamburger.scss';

const Hamburger = ({ el, state, hook }) => {
  const [isActive, setIsActive] = useNavToggle(el, state);
  const onClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    hook(isActive);
  });
  return (
    <button
      className={classNames('hamburger', isActive ? 'active' : '')}
      onClick={onClick}
    >
      <div className="hamburger__line" />
      <div className="hamburger__line" />
      <div className="hamburger__line" />
    </button>
  );
};

Hamburger.defaultProps = {
  el: '',
  state: false,
  hook: () => {},
};

export default Hamburger;
