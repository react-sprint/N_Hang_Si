import React, { useState } from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';
import Button from '@/components/commons/Button';
import '@/assets/scss/layouts/prepare/RadioButtonBox.scss';

const RadioButtonBox = ({ dataList, hook, defaultValue, title }) => {
  const [select, setSelect] = useState(defaultValue);
  const list = dataList;
  const buttonSelect = value => {
    setSelect(value);
    hook(value);
  };
  return (
    <div className="level--box">
      <TextWithArrow text={title} />
      <div className="button--container">
        {list.map(item => (
          <Button
            key={item}
            contents={item}
            hook={buttonSelect}
            active={select === item}
            value={item}
          />
        ))}
      </div>
    </div>
  );
};

RadioButtonBox.defultProps = {
  title: '주제입니다',
  dataList: ['1', '2', '3'],
  defaultValue: '3',
  hook: () => {},
};

export default RadioButtonBox;
