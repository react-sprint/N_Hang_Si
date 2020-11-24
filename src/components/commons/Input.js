import React from 'react';

import useInput from '@/utils/hooks/useInput';

import '@/assets/scss/commons/Input.scss';

/* 
Input
  data
  placeholder
*/

const Input = ({ data, placeholder }) => {
  const { value, onChange } = useInput(data);
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
};

export default Input;
