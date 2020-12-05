import React, { useState } from 'react';
import '@/assets/scss/layouts/ingame/SliderBox.scss';
import Textarea from '@/components/commons/Textarea';
import TopicCard from '@/components/elements/ingame/TopicCard';
// redux modules

const SliderBox = ({ topic, wordNow, pageIndex }) => {
  const [value, setValue] = useState('');
  const onChange = data => {
    setValue(data);
    // textarea의 value를 관리합니다
  };

  return (
    <>
      <div
        className="slider__box"
        style={{
          width: `${100 / topic.length}%`,
        }}
      >
        <TopicCard topic={topic} wordNow={wordNow} pageIndex={pageIndex} />
        <div className="slider__box--text">
          <Textarea
            placeholder="클릭하여 입력해주세요"
            text={value}
            hook={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default SliderBox;
