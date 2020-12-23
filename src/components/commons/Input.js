import React, { useState } from 'react';

import '@/assets/scss/commons/Input.scss';

const Input = ({ data, placeholder, hook }) => {
  const [value, setValue] = useState(data);
  const onChange = e => {
    setValue(e.target.value);
    hook(e.target.value);
  };
  return (
    <input
      value={value}
      type="text"
      className="input"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  data: '',
  placeholder: '입력해주세요',
  hook: () => {},
};

export default Input;
