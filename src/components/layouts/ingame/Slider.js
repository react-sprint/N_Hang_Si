import React from 'react';
import '@/assets/scss/layouts/ingame/SliderBox.scss';
// components
import SliderBox from './SliderBox';

function Slider({ topic }) {
  const topicArray = topic.split('');
  return (
    <>
      {topicArray.map(function (wordNow, wordIndex) {
        return (
          <SliderBox topic={topic} wordNow={wordNow} wordIndex={wordIndex} />
        );
      })}
    </>
  );
}

Slider.defaultProps = {
  topic: '순두부',
};

export default Slider;
