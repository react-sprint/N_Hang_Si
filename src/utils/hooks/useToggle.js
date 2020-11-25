import { useState } from 'react';

const useInput = toggle => {
  const [isToggle, setIsToggle] = useState(toggle);
  const onToggle = () => {
    setIsToggle(!isToggle);
  };
  return [isToggle, onToggle];
};

export default useInput;
