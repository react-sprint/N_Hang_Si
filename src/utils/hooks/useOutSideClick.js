import { useState, useEffect } from 'react';

const useOutSideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  if (el) {
    useEffect(() => {
      const onClick = e => {
        if (el.current !== null && !el.current.contains(e.target)) {
          setIsActive(!isActive);
        }
      };
      if (isActive) {
        window.addEventListener('click', onClick);
      }
      return () => {
        window.removeEventListener('click', onClick);
      };
    }, [isActive, el]);
  }
  return [isActive, setIsActive];
};

export default useOutSideClick;
