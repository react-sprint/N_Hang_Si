import React from 'react';
import '@/assets/scss/layouts/ingame/Slider.scss';
import SliderBox from './SliderBox';

const Slider = ({ topic, indexNow, hook, listPush, ref }) => {
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
              key={word}
              listPush={listPush}
              ref={null}
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
  ref: null,
};

export default Slider;
