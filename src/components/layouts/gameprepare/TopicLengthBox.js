import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Button from '@/components/commons/Button';
import '@/assets/scss/layouts/gameprepare/LevelBox.scss';
import '@/assets/scss/commons/Button.scss';

const LevelBox = () => {
  return (
    <div className="level--box">
      <TextWithArrow text="글자 수를 선택 해 주세요." />
      <div className="button--container">
        <Button contents="2" />
        <Button contents="3" />
        <Button contents="4" />
        <Button contents="5" />
        <Button contents="6" />
      </div>
    </div>
  );
};

export default LevelBox;
