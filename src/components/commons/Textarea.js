import React, { useState } from 'react';
import '@/assets/scss/commons/Textarea.scss';

const Textarea = ({ placeholder, hook }) => {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
    hook(value);
  };
  return (
    <textarea
      className="textarea"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      tabIndex={-1}
    />
  );
};

Textarea.defaultProps = {
  text: '',
  placeholder: '입력해주세요.',
  hook: () => {},
};

export default Textarea;
