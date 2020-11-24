import React from 'react';
import classNames from 'classnames';

import useOutSideClick from '@/utils/hooks/useOutSideClick';

import '@/assets/scss/elements/nav/Hamburger.scss';

/* 
Hamburger
  el
  state
*/

const Hamburger = ({ el, state }) => {
  const [isActive, setIsActive] = useOutSideClick(el, state);
  return (
    <button
      className={classNames('hamburger', isActive ? 'active' : '')}
      onClick={() => setIsActive(!isActive)}
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
};

export default Hamburger;
