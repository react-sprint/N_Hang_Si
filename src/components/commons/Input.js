import React from 'react';

import useInput from '@/utils/hooks/useInput';

import '@/assets/scss/commons/Input.scss';

/* 
Input
  value
  placeholder
*/

const Input = ({ value, placeholder }) => {
  const { data, onChange } = useInput(value);
  return (
    <div className="inputWrap">
      <input
        value={data}
        type="text"
        className="input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  placeholder: '입력해주세요',
};

export default Input;
