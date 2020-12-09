import React from 'react';
import Slider from '@/components/layouts/ingame/Slider';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    topic: {
      control: 'text',
    },
    indexNow: {
      control: {
        type: 'range',
        default: 1,
        max: 6,
      },
    },
  },
};

export const Default = ({ topic, indexNow }) => (
  <Slider topic={topic} indexNow={indexNow} />
);
