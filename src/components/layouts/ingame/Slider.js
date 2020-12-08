import React from 'react';
import '@/assets/scss/layouts/ingame/Slider.scss';
import SliderBox from './SliderBox';

const Slider = ({ topic, indexNow, hook }) => {
  const topicArray = topic.split('');
  return (
    <div className="slider-wrap">
      <div
        className="slider"
        style={{
          width: `${topic.length * 100}%`,
          marginLeft: `-${`${indexNow}` * 100}%`,
        }}
      >
        {topicArray.map((word, index) => {
          return (
            <SliderBox
              topic={topic}
              wordNow={topicArray[index]}
              pageIndex={index}
              hook={hook}
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
};

export default Slider;
