import React from 'react';
import '@/assets/scss/layouts/ingame/Slider.scss';
import { useSelector } from 'react-redux';
import SliderBox from './SliderBox';

const Slider = ({ topic }) => {
  const { indexNow } = useSelector(state => ({
    indexNow: state.ingame.indexNow,
  }));

  const topicArray = topic.split('');
  return (
    <div className="slider-wrap">
      <div
        className="slider"
        style={{
          width: `${topic.length * 100}%`,
          marginLeft: `-${indexNow * 100}%`,
        }}
      >
        {topicArray.map((word, index) => {
          return (
            <SliderBox
              topic={topic}
              wordNow={topicArray[index]}
              pageIndex={index}
            />
          );
        })}
      </div>
    </div>
  );
};

Slider.defaultProps = {
  topic: '순두부',
};

export default Slider;
