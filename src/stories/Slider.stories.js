import React from 'react';
import Slider from '@/components/layouts/ingame/Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const Default = () => <Slider />;

export const Move = () => (
  <>
    <div className="flex-colomn">
      <div className="flex-row-center">
        <Slider sliderCount="0" />
      </div>
    </div>
    <div className="flex-colomn">
      <div className="flex-row-center">
        <Slider sliderCount="1" />
      </div>
    </div>
    <div className="flex-colomn">
      <div className="flex-row-center">
        <Slider sliderCount="2" />
      </div>
    </div>
  </>
);
