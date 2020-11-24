import { useState, useEffect } from 'react';

const useOutSideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  if (el) {
    useEffect(() => {
      const onClick = e => {
        // If the active element exists and is clicked outside of
        if (el.current !== null && !el.current.contains(e.target)) {
          setIsActive(!isActive);
        }
      };

      // If the item is active (ie open) then listen for clicks outside
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
