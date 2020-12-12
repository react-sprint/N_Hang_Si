import React, { useState } from 'react';
import '@/assets/scss/commons/Textarea.scss';

const Textarea = ({ placeholder, hook, listPush, ref }) => {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
    hook(e.target.value);
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      listPush();
      e.preventDefault();
    }
  };
  return (
    <textarea
      className="textarea"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      tabIndex={-1}
      ref={ref}
    />
  );
};

Textarea.defaultProps = {
  text: '',
  placeholder: '입력해주세요.',
  hook: () => {},
  listPush: () => {},
  ref: null,
};

export default Textarea;
