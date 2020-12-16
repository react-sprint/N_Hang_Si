import React, { useState } from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Button from '@/components/commons/Button';
import '@/assets/scss/layouts/gameprepare/LevelBox.scss';

const EASY = '지렁이';
const NORMAL = '일반인';
const HARD = '박명수';

const LevelBox = ({ hook }) => {
  const [select, setSelect] = useState('일반인');
  const buttonSelect = value => {
    setSelect(value);
    hook(value);
  };
  return (
    <div className="level--box">
      <TextWithArrow text="n행시 난이도를 선택 해 주세요." />
      <div className="button--container">
        <Button
          contents={EASY}
          hook={buttonSelect}
          active={select === EASY}
          value={EASY}
        />
        <Button
          contents={NORMAL}
          hook={buttonSelect}
          active={select === NORMAL}
          value={NORMAL}
        />
        <Button
          contents={HARD}
          hook={buttonSelect}
          active={select === HARD}
          value={HARD}
        />
      </div>
    </div>
  );
};

LevelBox.defaultProps = {
  hook: () => {},
};
export default LevelBox;
