import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Input from '@/components/commons/Input';
import '@/assets/scss/layouts/gameprepare/NicknameInputBox.scss';

const NickNameInputBox = ({ hook }) => {
  return (
    <div className="nickname--input__box">
      <TextWithArrow text="닉네임을 입력해주세요" />
      <div className="input--container">
        <Input placeholder="닉네임을 입력해주세요" hook={hook} />
      </div>
    </div>
  );
};

NickNameInputBox.defaultProps = {
  hook: () => {},
};

export default NickNameInputBox;
