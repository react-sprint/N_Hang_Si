import React, { useState } from 'react';
import '@/assets/scss/layouts/ingame/SliderBox.scss';
// components
import Textarea from '@/components/commons/Textarea';
import TopicCard from '@/components/elements/ingame/TopicCard';

function SliderBox({ topic, wordNow, wordIndex }) {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="slider__box">
        <TopicCard
          topic={wordNow}
          wordIndex={wordIndex}
          topicLength={topic.length}
        />
        <div className="slider__box--text">
          <Textarea
            placeholder="클릭하여 입력해주세요"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </>
  );
}

SliderBox.defaultProps = {
  topic: '순두부',
};

export default SliderBox;
