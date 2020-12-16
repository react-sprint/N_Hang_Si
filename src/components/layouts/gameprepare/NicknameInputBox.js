import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Input from '@/components/commons/Input';
import '@/assets/scss/layouts/gameprepare/NicknameInputBox.scss';

const NickNameInputBox = ({ hook, title, placeholder }) => {
  return (
    <div className="nickname--input__box">
      <TextWithArrow text={title} />
      <div className="input--container">
        <Input placeholder={placeholder} hook={hook} />
      </div>
    </div>
  );
};

NickNameInputBox.defaultProps = {
  title: '닉네임을 입력해주세요.',
  placeholder: '닉네임을 입력해주세요.',
  hook: () => {},
};

export default NickNameInputBox;
