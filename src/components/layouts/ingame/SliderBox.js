import React from 'react';
import '@/assets/scss/layouts/ingame/SliderBox.scss';
// components
import Textarea from '@/components/commons/Textarea';
import TopicCard from '@/components/elements/ingame/TopicCard';

const SliderBox = ({ topic, wordNow, pageIndex, hook }) => {
  return (
    <div className="slider__box" style={{ width: `${100 / topic.length}%` }}>
      <TopicCard topic={topic} wordNow={wordNow} pageIndex={pageIndex} />
      <div className="slider__box--text">
        <Textarea placeholder="클릭하여 입력해주세요" hook={hook} />
      </div>
    </div>
  );
};

export default SliderBox;
