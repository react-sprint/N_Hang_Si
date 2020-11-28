import React, { useState } from 'react';
// import classNames from 'classnames';
import '@/assets/scss/layouts/ingame/Slider.scss';
import Textarea from '@/components/commons/Textarea';

function Slider({ topic }) {
  const [value, setValue] = useState('');
  return (
    <div className="slider-wrap">
      <div className="slider">
        <div className="slider__box">
          <div className="slider__box--card">
            <div className="title">
              {topic}
              <div className="title--count">
                <span>1</span>/3
              </div>
            </div>
          </div>
          <div className="slider__box--text">
            <Textarea
              placeholder="클릭하여 입력해주세요"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Slider.defaultProps = {
  topic: '순두부',
};

export default Slider;
