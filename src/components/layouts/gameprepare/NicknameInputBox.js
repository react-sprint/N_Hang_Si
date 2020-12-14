import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Input from '@/components/commons/Input';
import '@/assets/scss/layouts/gameprepare/NicknameInputBox.scss';
import '@/assets/scss/commons/Input.scss';

const NickNameInputBox = ({ placeholder }) => {
  return (
    <div className="nickname--input__box">
      <TextWithArrow text="닉네임을 입력해주세요" />
      <div className="input--container">
        <Input placeholder={placeholder} />
      </div>
    </div>
  );
};

NickNameInputBox.defaultProps = {
  placeholder: 'paragraph',
};

export default NickNameInputBox;
