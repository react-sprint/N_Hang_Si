import React from 'react';
import '@/assets/scss/layouts/ingame/Slider.scss';
// components
import SliderBox from './SliderBox';

function Slider({ topic }) {
  const topicArray = topic.split('');
  return (
    <div className="slider">
      {topicArray.map(function (wordNow, wordIndex) {
        return (
          <SliderBox topic={topic} wordNow={wordNow} wordIndex={wordIndex} />
        );
      })}
    </div>
  );
}

Slider.defaultProps = {
  topic: '순두부',
};

export default Slider;
