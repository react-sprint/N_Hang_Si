import React, { useState, useEffect, useRef } from 'react';
import '@/assets/scss/commons/Textarea.scss';

const Textarea = ({
  placeholder,
  hook,
  wordNow,
  indexNow,
  topic,
  enterEvent,
}) => {
  const [value, setValue] = useState('');
  const thisSliderRef = useRef();
  const onChange = e => {
    setValue(e.target.value);
    hook(e.target.value);
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      enterEvent();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (wordNow === topic[indexNow]) {
      thisSliderRef.current.focus();
    }
  }, []);
  return (
    <textarea
      className="textarea"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      tabIndex={-1}
      ref={thisSliderRef}
    />
  );
};

Textarea.defaultProps = {
  placeholder: '입력해주세요.',
  wordNow: '순',
  indexNow: 0,
  topic: '순두부',
  hook: () => {},
  enterEvent: () => {},
};

export default Textarea;
