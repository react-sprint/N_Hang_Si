import React from 'react';
import '@/assets/scss/commons/Textarea.scss';
import useInput from '@/utils/hooks/useInput';

const Textarea = ({ text, placeholder }) => {
  const { value, onChange } = useInput(text);
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
};

export default Textarea;
