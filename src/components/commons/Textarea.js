import React, { useState, useEffect, useRef } from 'react';
import '@/assets/scss/commons/Textarea.scss';

const Textarea = ({
  placeholder,
  hook,
  listPush,
  wordNow,
  indexNow,
  topic,
  submitPush,
}) => {
  const [value, setValue] = useState('');
  const thisComponentRef = useRef();
  const onChange = e => {
    setValue(e.target.value);
    hook(e.target.value);
  };
  const onKeyUp = e => {
    if (e.key === 'Enter') {
      if (topic.length - 1 === indexNow) {
        submitPush();
      } else {
        listPush();
      }
    }
  };
  const onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (wordNow === topic[indexNow]) {
      thisComponentRef.current.focus();
    }
  }, []);
  return (
    <textarea
      className="textarea"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      tabIndex={-1}
      ref={thisComponentRef}
    />
  );
};

Textarea.defaultProps = {
  placeholder: '입력해주세요.',
  hook: () => {},
  listPush: () => {},
  wordNow: '순',
  indexNow: 0,
  topic: '순두부',
  submitPush: () => {},
};

export default Textarea;
