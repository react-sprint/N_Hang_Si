import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useOutSideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const location = useLocation();
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
    useEffect(() => {
      setIsActive(false);
    }, [location]);
  }
  return [isActive, setIsActive];
};

export default useOutSideClick;
