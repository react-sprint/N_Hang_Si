import React from 'react';
import '@/assets/scss/layouts/ingame/Slider.scss';
// components
import SliderBox from './SliderBox';

const Slider = ({ topic, sliderCount }) => {
  const topicArray = topic.split('');
  return (
    <div className="slider-wrap">
      <div
        className="slider"
        style={{
          width: `${100 * sliderCount}%`,
          marginLeft: `${-38 * sliderCount}rem`,
        }}
      >
        {topicArray.map((wordNow, wordIndex) => {
          return (
            <SliderBox
              topic={topic}
              wordNow={wordNow}
              wordIndex={wordIndex}
              sliderCount={sliderCount}
            />
          );
        })}
      </div>
    </div>
  );
};

Slider.defaultProps = {
  topic: '순두부',
  sliderCount: 0,
};

export default Slider;
