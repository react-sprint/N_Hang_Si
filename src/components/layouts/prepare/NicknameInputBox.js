import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Input from '@/components/commons/Input';
import '@/assets/scss/layouts/prepare/NicknameInputBox.scss';

const NickNameInputBox = ({ hook, title, placeholder, defaultValue }) => {
  return (
    <div className="nickname--input__box">
      <TextWithArrow text={title} />
      <div className="input--container">
        <Input placeholder={placeholder} hook={hook} data={defaultValue} />
      </div>
    </div>
  );
};

NickNameInputBox.defaultProps = {
  title: '닉네임을 입력해주세요.',
  placeholder: '닉네임을 입력해주세요.',
  defaultValue: '',
  hook: () => {},
};

export default NickNameInputBox;
