import React from 'react';
import '@/assets/scss/layouts/ingame/SliderBox.scss';
// components
import Textarea from '@/components/commons/Textarea';
import TopicCard from '@/components/elements/ingame/TopicCard';

const SliderBox = ({
  topic,
  wordNow,
  indexNow,
  hook,
  listPush,
  submitPush,
}) => {
  const style = { width: `${100 / topic.length}%` };
  return (
    <div className="slider__box" style={style}>
      <TopicCard topic={topic} wordNow={wordNow} pageIndex={indexNow} />
      <div className="slider__box--text">
        <Textarea
          placeholder="클릭하여 입력해주세요"
          hook={hook}
          listPush={listPush}
          wordNow={wordNow}
          indexNow={indexNow}
          topic={topic}
          submitPush={submitPush}
        />
      </div>
    </div>
  );
};

SliderBox.defaultProps = {
  topic: '순두부',
  wordNow: '순',
  indexNow: 0,
  hook: () => {},
  listPush: () => {},
  submitPush: () => {},
};

export default SliderBox;
