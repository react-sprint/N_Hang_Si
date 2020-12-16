import React from 'react';
import '@/assets/scss/layouts/ingame/Slider.scss';
import SliderBox from '@/components/layouts/ingame/SliderBox';

const Slider = ({ topic, indexNow, hook, listPush, submitPush }) => {
  const topicArray = topic.split('');
  const style = {
    width: `${topic.length * 100}%`,
    marginLeft: `-${`${indexNow}` * 100}%`,
  };
  return (
    <div className="slider-wrap">
      <div className="slider" style={style}>
        {topicArray.map((word, index) => {
          return (
            <SliderBox
              topic={topic}
              wordNow={word}
              pageIndex={index}
              hook={hook}
              key={word + String(index)}
              listPush={listPush}
              submitPush={submitPush}
              indexNow={indexNow}
            />
          );
        })}
      </div>
    </div>
  );
};

Slider.defaultProps = {
  topic: '순두부',
  indexNow: 0,
  hook: () => {},
  listPush: () => {},
  submitPush: () => {},
};

export default Slider;
