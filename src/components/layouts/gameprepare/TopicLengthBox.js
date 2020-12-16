import React, { useState } from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Button from '@/components/commons/Button';
import '@/assets/scss/layouts/gameprepare/LevelBox.scss';

const LENGTH = ['2', '3', '4', '5', '6'];

const TopicLengthBox = ({ hook }) => {
  const [select, setSelect] = useState('3');
  const buttonSelect = value => {
    setSelect(value);
    hook(value);
  };
  return (
    <div className="level--box">
      <TextWithArrow text="글자 수를 선택 해 주세요." />
      <div className="button--container">
        {LENGTH.map(length => (
          <Button
            key={length}
            contents={length}
            hook={buttonSelect}
            active={select === length}
            value={length}
          />
        ))}
      </div>
    </div>
  );
};

TopicLengthBox.defultProps = {
  hook: () => {},
};

export default TopicLengthBox;
