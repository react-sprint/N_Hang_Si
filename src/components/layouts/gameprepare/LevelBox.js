import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Button from '@/components/commons/Button';
import '@/assets/scss/layouts/gameprepare/LevelBox.scss';
import '@/assets/scss/commons/Button.scss';

const LevelBox = ({ onClick }) => {
  return (
    <div className="level--box">
      <TextWithArrow text="n행시 난이도를 선택 해 주세요." />
      <div className="button--container">
        <Button contents="지렁이" hook={onClick} />
        <Button contents="일반인" hook={onClick} />
        <Button contents="박명수" hook={onClick} />
      </div>
    </div>
  );
};

export default LevelBox;
